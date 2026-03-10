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

  const [lang, setLang] = useState<"en" | "ta">("en")

  const content = {
    en: {
      title: "Introduction to AI",
      text: "Vanakkam! A warm welcome to all our farmers. You have taken the first step toward a smarter way of farming. This is GramAI. Today, we are starting a journey to bring the power of technology right to your fingertips. Many people think AI—or Artificial Intelligence—is only for big cities, expensive machinery, or computer experts. But we are here to show you that technology can be a simple, helpful neighbor that lives right inside the phone you already carry. In this course, we are not going to talk about complicated machines you have to buy. Instead, we are going to introduce you to your Daily Digital Assistant. Think of this assistant as a wise, tireless partner. It works behind the scenes, using data about our weather, our soil, and our crops. Every morning, it will send you a simple, clear message—either by text or by voice in our own language—to help you decide: should you irrigate your fields today, or save your electricity? When is the best time to spray, so the wind doesn't waste your medicine? And how can you protect your harvest from upcoming rain? This is not about replacing your knowledge; it is about giving you more information to make your hard work count for even more. It is designed to work even when internet signals are weak, so you are never left in the dark. Throughout this course, you will learn how to use these daily alerts to save money, protect your crops, and make your farm more successful. You don’t need to be an expert in computers—you only need to be ready to learn a new way of working. Are you ready to meet your Assistant? Let’s begin Lesson 1. Your fields are waiting!",
      audio: "/lesson1-en.mp3"
    },
    ta: {
      title: "AI அறிமுகம்",
      text: "வணக்கம்! எங்கள் அனைத்து விவசாயிகளுக்கும் அன்பான வரவேற்பு. நீங்கள் ஒரு புத்திசாலித்தனமான விவசாய முறையை நோக்கி முதல் படியை எடுத்துள்ளீர்கள். இது கிராமாஐ. இன்று, தொழில்நுட்பத்தின் சக்தியை உங்கள் விரல் நுனியில் கொண்டு வருவதற்கான பயணத்தைத் தொடங்குகிறோம். AI—அல்லது செயற்கை நுண்ணறிவு—பெரிய நகரங்கள், விலையுயர்ந்த இயந்திரங்கள் அல்லது கணினி நிபுணர்களுக்கு மட்டுமே என்று பலர் நினைக்கிறார்கள். ஆனால் தொழில்நுட்பம் நீங்கள் ஏற்கனவே வைத்திருக்கும் தொலைபேசியின் உள்ளே வாழும் ஒரு எளிய, உதவிகரமான அண்டை வீட்டாராக இருக்க முடியும் என்பதை உங்களுக்குக் காட்ட நாங்கள் இங்கே இருக்கிறோம். இந்த பாடத்திட்டத்தில், நீங்கள் வாங்க வேண்டிய சிக்கலான இயந்திரங்களைப் பற்றி நாங்கள் பேசப் போவதில்லை. அதற்கு பதிலாக, உங்கள் தினசரி டிஜிட்டல் உதவியாளரை நாங்கள் உங்களுக்கு அறிமுகப்படுத்தப் போகிறோம். இந்த உதவியாளரை ஒரு புத்திசாலித்தனமான, சளைக்காத கூட்டாளியாக நினைத்துப் பாருங்கள். இது திரைக்குப் பின்னால் செயல்படுகிறது, நமது வானிலை, நமது மண் மற்றும் நமது பயிர்கள் பற்றிய தரவைப் பயன்படுத்துகிறது. ஒவ்வொரு காலையிலும், இது உங்களுக்கு ஒரு எளிய, தெளிவான செய்தியை அனுப்பும் - உரை மூலமாகவோ அல்லது நமது சொந்த மொழியில் குரல் மூலமாகவோ - நீங்கள் முடிவு செய்ய உதவும்: இன்று உங்கள் வயல்களுக்கு நீர்ப்பாசனம் செய்ய வேண்டுமா அல்லது உங்கள் மின்சாரத்தை சேமிக்க வேண்டுமா? காற்று உங்கள் மருந்தை வீணாக்காமல் இருக்க, தெளிக்க சிறந்த நேரம் எப்போது? வரவிருக்கும் மழையிலிருந்து உங்கள் அறுவடையை எவ்வாறு பாதுகாக்க முடியும்? இது உங்கள் அறிவை மாற்றுவது பற்றியது அல்ல; இது உங்கள் கடின உழைப்பை இன்னும் அதிகமாகப் பெற உதவும் கூடுதல் தகவல்களை வழங்குவதாகும். இணைய சிக்னல்கள் பலவீனமாக இருந்தாலும் கூட வேலை செய்யும் வகையில் இது வடிவமைக்கப்பட்டுள்ளது, எனவே நீங்கள் ஒருபோதும் இருட்டில் விடப்பட மாட்டீர்கள். இந்தப் பாடநெறி முழுவதும், பணத்தைச் சேமிக்கவும், உங்கள் பயிர்களைப் பாதுகாக்கவும், உங்கள் பண்ணையை மேலும் வெற்றிகரமாக மாற்றவும் இந்த தினசரி விழிப்பூட்டல்களை எவ்வாறு பயன்படுத்துவது என்பதை நீங்கள் கற்றுக்கொள்வீர்கள். நீங்கள் கணினிகளில் நிபுணராக இருக்க வேண்டிய அவசியமில்லை - நீங்கள் வேலை செய்வதற்கான புதிய வழியைக் கற்றுக்கொள்ள மட்டுமே தயாராக இருக்க வேண்டும். உங்கள் உதவியாளரைச் சந்திக்க நீங்கள் தயாரா? பாடம் 1 ஐத் தொடங்குவோம். உங்கள் வயல்கள் காத்திருக்கின்றன!",
      audio: "/lesson1-ta.mp3"
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
        </div>


        {/* Lesson Title */}

        <h1 className="text-3xl font-bold">
          {content[lang].title}
        </h1>


        {/* Audio Player */}

        <audio key={lang} controls className="mt-6 w-full">
          <source src={content[lang].audio} type="audio/mpeg"/>
        </audio>


        {/* Download Audio Button */}

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


        {/* Next Lesson Button */}

        <Link href="/lessons/lesson2">
          <button className="mt-8 bg-linear-to-r from-red-600 to-indigo-700 text-white px-6 py-2 rounded" onClick={()=>{
    saveProgress("lesson1")}}>
            Next Lesson
          </button>
        </Link>

      </main>
    </>
  )
}