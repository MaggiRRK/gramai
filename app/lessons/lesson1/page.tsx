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

export default function Lesson1() {

  const [lang, setLang] = useState<"en" | "ta" | "hi">("en")

  const content = {
    en: {
      title: "Introduction to AI",
      text: "Vanakkam! A warm welcome to all our farmers. You have taken the first step toward a smarter way of farming. This is GramAI. Today, we are starting a journey to bring the power of technology right to your fingertips. Many people think AI—or Artificial Intelligence—is only for big cities, expensive machinery, or computer experts. But we are here to show you that technology can be a simple, helpful neighbor that lives right inside the phone you already carry. In this course, we are not going to talk about complicated machines you have to buy. Instead, we are going to introduce you to your Daily Digital Assistant...",
      audio: "/lesson1-en.mp3"
    },

    ta: {
      title: "AI அறிமுகம்",
      text: "வணக்கம்! எங்கள் அனைத்து விவசாயிகளுக்கும் அன்பான வரவேற்பு. நீங்கள் ஒரு புத்திசாலித்தனமான விவசாய முறையை நோக்கி முதல் படியை எடுத்துள்ளீர்கள். இது கிராமாஐ. இன்று, தொழில்நுட்பத்தின் சக்தியை உங்கள் விரல் நுனியில் கொண்டு வருவதற்கான பயணத்தைத் தொடங்குகிறோம்...",
      audio: "/lesson1-ta.mp3"
    },

    hi: {
      title: "एआई का परिचय",
      text: "नमस्कार! हमारे सभी किसानों का हार्दिक स्वागत है। आपने खेती के एक स्मार्ट तरीके की ओर पहला कदम उठाया है। यह है GramAI। आज हम एक ऐसी यात्रा शुरू कर रहे हैं जिसमें तकनीक की शक्ति सीधे आपके हाथों तक पहुँचाई जाएगी। बहुत से लोग सोचते हैं कि AI यानी आर्टिफिशियल इंटेलिजेंस केवल बड़े शहरों, महंगी मशीनों या कंप्यूटर विशेषज्ञों के लिए है। लेकिन हम आपको दिखाना चाहते हैं कि तकनीक आपके मोबाइल फोन के अंदर रहने वाला एक सरल और मददगार साथी बन सकती है। इस कोर्स में हम आपको जटिल मशीनें खरीदने के बारे में नहीं बताएंगे। इसके बजाय हम आपको आपके दैनिक डिजिटल सहायक से परिचित कराएंगे। यह सहायक मौसम, मिट्टी और फसलों के डेटा का उपयोग करके हर सुबह आपको एक सरल संदेश भेजेगा — जिससे आप तय कर सकें कि आज खेतों को पानी देना है या नहीं, दवा छिड़कने का सही समय क्या है, और आने वाली बारिश से फसल को कैसे बचाना है। यह आपकी मेहनत को बदलने के लिए नहीं बल्कि उसे और अधिक सफल बनाने के लिए बनाया गया है।",
      audio: "/lesson1-hi.mp3"
    }

  }

  return (
    <>
      <Navbar />

      <main className="p-10 max-w-3xl mx-auto">

      <ProgressBar progress={33} />

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


        {/* Lesson Title */}

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


        {/* Next Lesson */}

        <Link href="/lessons/lesson2">
          <button
            className="mt-8 bg-linear-to-r from-red-600 to-indigo-700 text-white px-6 py-2 rounded"
            onClick={()=>{ saveProgress("lesson1") }}
          >
            Next Lesson
          </button>
        </Link>

      </main>
    </>
  )
}