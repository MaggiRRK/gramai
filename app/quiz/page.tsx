"use client"

import { useState } from "react"
import Navbar from "../../components/navbar"
import html2canvas from "html2canvas"
import { useRef } from "react"

function saveCertificate(courseName: string) {

const storedUser = localStorage.getItem("currentUser")
const user = storedUser ? JSON.parse(storedUser) : null

if (!user) return

const certificates = JSON.parse(localStorage.getItem("certificates") || "{}")

if (!certificates[user.email]) {
certificates[user.email] = []
}

certificates[user.email].push(courseName)

localStorage.setItem("certificates", JSON.stringify(certificates))

}

type Question = {
  question: string
  options: string[]
  answer: number
}

const quizData = {
  en: [
    {
      question: "What is the primary role of the GramAI 'Daily Digital Assistant'?",
      options: [
        "To replace the farmer's traditional knowledge",
        "To act as a supportive partner providing data-driven insights",
        "To automate all physical farm labor",
      ],
      answer: 1,
    },
    {
      question: "Why is the 7:00 AM daily message effective for rural farmers?",
      options: [
        "It requires high-speed 5G internet",
        "It uses standard cellular networks to deliver clear advice",
        "It requires the farmer to visit a computer center",
      ],
      answer: 1,
    },
    {
      question: "What does the 'Eye in the Sky' satellite detect early?",
      options: [
        "Future market prices",
        "Early signs of crop stress",
        "Arrival of market traders",
      ],
      answer: 1,
    },
    {
      question: "Why might the assistant suggest skipping irrigation?",
      options: [
        "System is broken",
        "Rain expected or soil moisture already sufficient",
        "Water use not allowed",
      ],
      answer: 1,
    },
    {
      question: "Why spray pesticides before 9:30 AM?",
      options: [
        "Only works in dark",
        "Winds lighter and heat lower",
        "Insects are sleeping",
      ],
      answer: 1,
    },
    {
      question: "Why target pest control to specific sections?",
      options: [
        "Use more chemicals",
        "Save money and protect soil health",
        "Force pests to move farms",
      ],
      answer: 1,
    },
    {
      question: "How does GramAI simplify weather info?",
      options: [
        "Complex weather maps",
        "Combines forecast with field needs",
        "Ignores weather",
      ],
      answer: 1,
    },
    {
      question: "Advantage of satellite alerts?",
      options: [
        "Manual inspection impossible",
        "Early detection across entire field",
        "Satellites spray pesticides",
      ],
      answer: 1,
    },
    {
      question: "How does GramAI help farmers act as business managers?",
      options: [
        "Data-driven decisions reducing waste",
        "Stop working in field",
        "Automatically sell crops",
      ],
      answer: 0,
    },
    {
      question: "Main requirement for GramAI success?",
      options: [
        "Large budget",
        "Willingness to learn using mobile technology",
        "Software engineering degree",
      ],
      answer: 1,
    },
  ],

  ta: [
    {
      question: "GramAI தினசரி டிஜிட்டல் உதவியாளரின் முக்கிய பங்கு என்ன?",
      options: [
        "விவசாயியின் பாரம்பரிய அறிவை மாற்றுவது",
        "தரவு அடிப்படையிலான ஆலோசனைகளை வழங்கும் துணை உதவியாளர்",
        "அனைத்து வேலைகளையும் தானியங்கி செய்வது",
      ],
      answer: 1,
    },
    {
      question: "காலை 7 மணி செய்தி ஏன் பயனுள்ளதாக உள்ளது?",
      options: [
        "5G இணையம் தேவை",
        "சாதாரண மொபைல் நெட்வொர்க்கில் வரும்",
        "கம்ப்யூட்டர் மையத்திற்கு செல்ல வேண்டும்",
      ],
      answer: 1,
    },
    {
      question: "செயற்கைக்கோள் எதை முன்கூட்டியே கண்டறியும்?",
      options: [
        "சந்தை விலை",
        "பயிர் அழுத்தம் அல்லது மண் வறட்சி",
        "வியாபாரிகள் வருகை",
      ],
      answer: 1,
    },
    {
      question: "ஏன் நீர்ப்பாசனம் தவிர்க்க சொல்லலாம்?",
      options: [
        "சிஸ்டம் பழுதானது",
        "மண் ஈரப்பதம் போதுமானது அல்லது மழை வரும்",
        "தண்ணீர் பயன்படுத்த அனுமதி இல்லை",
      ],
      answer: 1,
    },
    {
      question: "ஏன் காலை 9:30க்கு முன் தெளிக்க வேண்டும்?",
      options: [
        "இருட்டில் மட்டுமே வேலை செய்கிறது",
        "காற்று குறைவு மற்றும் வெப்பம் குறைவு",
        "பூச்சிகள் தூங்கும்",
      ],
      answer: 1,
    },
    {
      question: "ஏன் ஒரு பகுதியை மட்டும் சிகிச்சை செய்ய வேண்டும்?",
      options: [
        "அதிக வேதிப்பொருள் பயன்படுத்த",
        "பணம் சேமித்து மண் ஆரோக்கியம் காக்க",
        "பூச்சிகள் வேறு பண்ணைக்கு செல்ல",
      ],
      answer: 1,
    },
    {
      question: "GramAI வானிலை தகவலை எவ்வாறு எளிதாக்குகிறது?",
      options: [
        "சிக்கலான வரைபடங்கள்",
        "வானிலை + வயல் தேவைகளை இணைக்கிறது",
        "வானிலையை புறக்கணிக்கிறது",
      ],
      answer: 1,
    },
    {
      question: "செயற்கைக்கோள் எச்சரிக்கையின் நன்மை என்ன?",
      options: [
        "கைமுறையாக பார்க்க முடியாது",
        "முழு வயலிலும் முன்கூட்டியே கண்டறிதல்",
        "செயற்கைக்கோள் பூச்சி மருந்து தெளிக்கும்",
      ],
      answer: 1,
    },
    {
      question: "GramAI விவசாயியை வணிக மேலாளராக எப்படி உதவுகிறது?",
      options: [
        "தரவு அடிப்படையில் முடிவெடுக்க உதவும்",
        "வேலை நிறுத்த அனுமதி",
        "பயிர்களை தானாக விற்பனை",
      ],
      answer: 0,
    },
    {
      question: "GramAI வெற்றிக்கான முக்கிய தேவையானது என்ன?",
      options: [
        "பெரிய முதலீடு",
        "மொபைல் தொழில்நுட்பத்தை பயன்படுத்தும் மனப்பான்மை",
        "சாப்ட்வேர் பட்டம்",
      ],
      answer: 1,
    },
  ],
}

export default function QuizPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const certificateRef = useRef<HTMLDivElement>(null)

  const questions = quizData[language]

  const answerQuestion = (index: number) => {
    if (index === questions[current].answer) {
      setScore(score + 1)
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }
  
  const downloadCertificate = async () => {
  if (!certificateRef.current) return

  const canvas = await html2canvas(certificateRef.current)
  const link = document.createElement("a")

  link.download = "GramAI-Certificate.png"
  link.href = canvas.toDataURL()
  link.click()
}

  const percentage = Math.round((score / questions.length) * 100)

  return (
    <>
      <Navbar />

      <main className="p-10 max-w-2xl mx-auto">

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setLanguage("en")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            English
          </button>

          <button
            onClick={() => setLanguage("ta")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
           Tamil தமிழ்
          </button>
        </div>

        {!finished ? (
          <>
            <h1 className="text-3xl font-bold mb-6">
              GramAI Quiz
            </h1>

            <p className="text-xl mb-6">
              {questions[current].question}
            </p>

            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answerQuestion(i)}
                  className="block w-full bg-red-500 text-white px-4 py-3 rounded"
                >
                  {opt}
                </button>
              ))}
            </div>

            <p className="mt-6 text-gray-500">
              Question {current + 1} / {questions.length}
            </p>
          </>
        ) : (
          <div className="text-center">

            <h1 className="text-4xl font-bold mb-6">
              Quiz Complete
            </h1>

            <p className="text-xl mb-4">
              Score: {score} / {questions.length}
            </p>

            <p className="text-xl mb-6">
              Percentage: {percentage}%
            </p>

{percentage >= 40 ? (
  <>
 <div
  ref={certificateRef}
  className="bg-white p-16 text-center"
  style={{
    maxWidth: "950px",
    margin: "0 auto",
    border: "8px solid #2e7d32",
    borderRadius: "8px",
    color: "#000"
  }}
>

<div style={{marginBottom:"30px"}}>

<h1 style={{
fontSize:"42px",
fontWeight:"bold",
color:"#2e7d32",
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"12px"
}}>
🌾 GramAI
</h1>

<p style={{
fontSize:"16px",
marginTop:"5px"
}}>
AI Powered Farming Assistant
</p>

</div>


<h2 style={{
fontSize:"36px",
fontWeight:"bold",
marginBottom:"35px"
}}>
Certificate of Completion
</h2>


<p style={{
fontSize:"20px",
marginBottom:"15px"
}}>
This certificate is proudly presented to
</p>


<h3 style={{
fontSize:"30px",
fontWeight:"bold",
marginBottom:"25px",
borderBottom:"2px solid #ccc",
display:"inline-block",
paddingBottom:"5px",
minWidth:"300px"
}}>
Farmer Participant
</h3>


<p style={{
fontSize:"20px",
marginTop:"20px",
marginBottom:"15px"
}}>
for successfully completing the course
</p>


<h3 style={{
fontSize:"32px",
fontWeight:"bold",
color:"#2e7d32",
marginBottom:"25px"
}}>
GramAI Smart Farming Basics
</h3>


<p style={{
fontSize:"20px"
}}>
Final Score: <strong>{percentage}%</strong>
</p>


<div style={{
display:"flex",
justifyContent:"space-between",
marginTop:"60px"
}}>

<div style={{textAlign:"center"}}>
<p style={{borderTop:"1px solid black",width:"200px",margin:"0 auto"}}></p>
<p style={{marginTop:"8px"}}>GramAI Learning Team</p>
</div>

<div style={{textAlign:"center"}}>
<p style={{borderTop:"1px solid black",width:"200px",margin:"0 auto"}}></p>
<p style={{marginTop:"8px"}}>
Date: {new Date().toLocaleDateString()}
</p>
</div>

</div>

</div>
<button
  onClick={() => {
    downloadCertificate()
    saveCertificate("Digital Skills Course")
  }}
  className="mt-6 bg-linear-to-r from-red-600 to-indigo-700 text-white px-6 py-3 rounded"
>
  Download Certificate
</button>
  </>
) : (
  <p className="text-red-600 text-xl">
    Score below 40%. Please try again.
  </p>
)}
          </div>
        )}
      </main>
    </>
  )
}