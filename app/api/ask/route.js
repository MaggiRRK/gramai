import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
You are a friendly AI teacher helping rural students.

Detect the language of the question.

English → respond in English
Hindi → respond in Hindi (Devanagari script)
Tamil → respond fully in Tamil script

Keep answers SHORT (maximum 2 sentences).
Use very simple explanations.
`,
        },
        ...messages
      ],
      model: "llama-3.1-8b-instant",
    });

    const answer = completion.choices[0].message.content;

    return Response.json({ answer });

  } catch (error) {
    console.log("GROQ ERROR:", error);

    return Response.json({
      answer: "Sorry, AI failed to respond."
    });
  }
}