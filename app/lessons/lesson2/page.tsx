"use client"

import { useState } from "react"
import Navbar from "../../../components/navbar"
import Link from "next/link"
import ProgressBar from "../../../components/progressbar"

function saveProgress(lessonName: string){

const storedUser = localStorage.getItem("currentUser")
const user = storedUser ? JSON.parse(storedUser) : null

if(!user) return

const progress = JSON.parse(localStorage.getItem("progress") || "{}")

if(!progress[user.email]){
progress[user.email] = []
}

if(!progress[user.email].includes(lessonName)){
progress[user.email].push(lessonName)
}

localStorage.setItem("progress", JSON.stringify(progress))

}

export default function Lesson2() {

  const [lang, setLang] = useState<"en" | "ta" | "hi">("en")

  const content = {
    en: {
      title: "Lesson 2: Introducing your AI assistant",
      text: "Vanakkam! Welcome to your new way of farming. We know you have years of experience in your fields—that wisdom is irreplaceable. What we are doing today is simply giving you an extra pair of eyes to help make your hard work even more productive. Starting today, you will receive a simple message on your phone every morning at 7:00 AM. Think of this as your Daily Digital Assistant...",
      audio: "/lesson2-en.mp3"
    },

    ta: {
      title: "பாடம் 2: உங்கள் AI உதவியாளரை அறிமுகப்படுத்துதல்",
      text: "பின்வரும் ஸ்கிரிப்ட், விவசாயிகளுக்கு காலை 7:00 மணி தினசரி ஆலோசகர் செய்தியை விளக்குகிறது, இது நடைமுறை, அன்றாட வழிகாட்டுதலை வழங்க செயற்கைக்கோள் தரவை எவ்வாறு பயன்படுத்துகிறது என்பதில் கவனம் செலுத்துகிறது...",
      audio: "/lesson2-ta.mp3"
    },

    hi: {
      title: "पाठ 2: आपके एआई सहायक का परिचय",
      text: "नमस्कार! खेती के इस नए तरीके में आपका स्वागत है। हमें पता है कि आपके पास अपने खेतों में वर्षों का अनुभव है — वह ज्ञान अमूल्य है। आज हम जो कर रहे हैं वह केवल आपको एक अतिरिक्त सहायता देना है ताकि आपकी मेहनत और अधिक फलदायी बन सके। आज से हर सुबह 7:00 बजे आपके फोन पर एक सरल संदेश आएगा। इसे अपने दैनिक डिजिटल सहायक की तरह समझें। यह सहायक उपग्रह चित्रों और मौसम की जानकारी का उपयोग करके आपको सलाह देगा...",
      audio: "/lesson2-hi.mp3"
    }
  }

  return (
    <>
      <Navbar />

      <main className="p-10 max-w-3xl mx-auto">

        <ProgressBar progress={66} />

        {/* Language Switch */}
        <div className="flex gap-4 mb-6">

          <button
            onClick={() => setLang("en")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            English
          </button>

          <button
            onClick={() => setLang("ta")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Tamil தமிழ்
          </button>

          <button
            onClick={() => setLang("hi")}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Hindi हिंदी
          </button>

        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">
          {content[lang].title}
        </h1>

        {/* Audio Player */}
        <audio key={lang} controls className="mt-6 w-full">
          <source src={content[lang].audio} type="audio/mpeg"/>
        </audio>

        {/* Download Audio */}
        <div className="mt-3">
          <a
            href={content[lang].audio}
            download
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded"
          >
            Download Lesson Audio 🎧
          </a>
        </div>

        {/* Transcript */}
        <div className="mt-6 bg-gray-100 text-black p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-2">
            Transcript
          </h2>

          <p>
            {content[lang].text}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">

          <Link href="/lessons/lesson1">
            <button className="bg-gray-700 text-white px-6 py-2 rounded">
              Previous Lesson
            </button>
          </Link>

          <Link href="/lessons/lesson3">
            <button
              className="bg-linear-to-r from-red-600 to-indigo-700 text-white px-6 py-2 rounded"
              onClick={()=>{ saveProgress("lesson2") }}
            >
              Next Lesson
            </button>
          </Link>

        </div>

      </main>
    </>
  )
}