"use client";


import { useState, useEffect } from "react";

export default function VoiceInput() {

  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [messages, setMessages] = useState([]);

useEffect(() => {
  speechSynthesis.getVoices();
}, []);

const speak = (text) => {

  const utterance = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();

  // Pick best available voice
  const voice =
    voices.find(v => v.name.includes("Google")) ||
    voices.find(v => v.name.includes("Microsoft")) ||
    voices.find(v => v.lang.includes("en")) ||
    voices[0];

  utterance.voice = voice;

  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;

  speechSynthesis.cancel(); // stop previous audio
  speechSynthesis.speak(utterance);
};
  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = async (event) => {

      const transcript = event.results[0][0].transcript;

      setUserText(transcript);

      const newMessages = [
        ...messages,
        { role: "user", content: transcript }
      ];

      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.answer }
      ]);

      setAiText(data.answer);

      await speak(data.answer);
    };
  };

  return (
    <div className="text-center mt-10">

      <button
        onClick={startListening}
        className="bg-linear-to-r from-red-600 to-indigo-700 text-white px-4 py-2 rounded"
      >
        🎤 Speak
      </button>

      <p className="mt-6 text-lg">
        You said: {userText}
      </p>

      <p className="mt-4 text-lg text-green-400">
        AI said: {aiText}
      </p>

    </div>
  );
}