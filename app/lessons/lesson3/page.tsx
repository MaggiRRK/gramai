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

export default function Lesson3() {

  const [lang, setLang] = useState<"en" | "ta" | "hi">("en")

  const content = {
    en: {
      title: "GramAI: Your 7:00 AM Daily Field Update",
      text: "GramAI: Your 7:00 AM Daily Field Update. Date: March 9, 2026. Location: Chengalpattu, Tamil Nadu. Vanakkam, Farmer! Here is your plan for today: Weather Forecast: It will be a bright, sunny day with temperatures reaching 33°C by afternoon. The sky will be clear with no rain expected. It will feel warm and breezy, so stay hydrated while working outdoors. Soil & Field Status: Satellite data shows that the soil surface moisture is decreasing due to the high daytime heat. Your fields are currently in a Moderate-Dry state, and some areas in the open sun are showing early signs of crusting. Your Action Plan: Watering: Soil moisture is dipping. Please schedule your irrigation for the early morning (before 9:00 AM) or late evening to ensure the water reaches the roots before it evaporates in the midday sun. Pest Treatment: The weather is stable and calm today. If you have been planning to spray for common pests, today is a good day to do it. Ensure you finish application by 9:30 AM while the winds are light to prevent drifting. Upcoming Sowing Season: As we approach the end of the current cycle, it is the perfect time to prepare your land for the upcoming season. Based on the local climate and soil profile, Okra, Amaranthus, and Beans are excellent choices for sowing right now. They thrive in this warming weather and will yield well in the coming months. GramAI: Helping you farm with wisdom.",
      audio: "/lesson3-en.mp3"
    },

    ta: {
      title: "கிராமாஏஐ: உங்கள் தினசரி 7:00 காலை கள அறிவிப்பு",
      text: "கிராமாஏஐ: உங்கள் தினசரி 7:00 காலை கள அறிவிப்பு. தேதி: மார்ச் 9, 2026. இடம்: செங்கல்பட்டு, தமிழ்நாடு. வணக்கம், விவசாயி! இன்றைய உங்கள் திட்டம் இதோ: வானிலை முன்னறிவிப்பு: மதியத்திற்குள் வெப்பநிலை 33°C ஐ எட்டும் பிரகாசமான, வெயில் நிறைந்த நாளாக இருக்கும். மழை எதிர்பார்க்கப்படாமல் வானம் தெளிவாக இருக்கும். இது சூடாகவும், தென்றலாகவும் இருக்கும், எனவே வெளியில் வேலை செய்யும் போது நீரேற்றத்துடன் இருங்கள். மண் மற்றும் கள நிலை: பகல்நேர வெப்பம் அதிகமாக இருப்பதால் மண்ணின் மேற்பரப்பு ஈரப்பதம் குறைந்து வருவதாக செயற்கைக்கோள் தரவு காட்டுகிறது...",
      audio: "/lesson3-ta.mp3"
    },

    hi: {
      title: "GramAI: आपका सुबह 7:00 बजे का दैनिक खेत अपडेट",
      text: "GramAI: आपका सुबह 7:00 बजे का दैनिक खेत अपडेट। दिनांक: 9 मार्च 2026। स्थान: चेंगलपट्टू, तमिलनाडु। नमस्कार किसान! आज के लिए आपकी योजना यह रही: मौसम पूर्वानुमान: आज का दिन साफ और धूप वाला रहेगा और दोपहर तक तापमान लगभग 33°C तक पहुँच सकता है। बारिश की संभावना नहीं है। बाहर काम करते समय पानी पीते रहें। मिट्टी और खेत की स्थिति: उपग्रह डेटा दिखाता है कि दिन की गर्मी के कारण मिट्टी की सतह की नमी कम हो रही है। आपके खेत अभी मध्यम-सूखी स्थिति में हैं और धूप वाले हिस्सों में सूखने के शुरुआती संकेत दिखाई दे रहे हैं। आज की कार्य योजना: सिंचाई: मिट्टी की नमी कम हो रही है। इसलिए सुबह जल्दी (9 बजे से पहले) या शाम को सिंचाई करना बेहतर होगा ताकि पानी धूप में जल्दी वाष्पित न हो। कीट नियंत्रण: आज मौसम स्थिर और शांत है। यदि आप कीटनाशक छिड़काव की योजना बना रहे हैं तो आज अच्छा दिन है। सुबह 9:30 बजे से पहले छिड़काव पूरा कर लें। आने वाला बुवाई मौसम: जैसे-जैसे वर्तमान फसल चक्र समाप्ति की ओर है, यह अगले मौसम के लिए जमीन तैयार करने का सही समय है। स्थानीय जलवायु और मिट्टी के आधार पर भिंडी, चौलाई और बीन्स अभी बोने के लिए अच्छे विकल्प हैं। GramAI: समझदारी के साथ खेती करने में आपकी मदद करता है।",
      audio: "/lesson3-hi.mp3"
    }
  }

  return (
    <>
      <Navbar />

      <main className="p-10 max-w-3xl mx-auto">

        <ProgressBar progress={100} />

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


        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">

          <Link href="/lessons/lesson2">
            <button className="bg-gray-700 text-white px-6 py-2 rounded">
              Previous Lesson
            </button>
          </Link>

          <Link href="/quiz">
            <button
              className="bg-linear-to-r from-red-600 to-indigo-700 text-white px-6 py-2 rounded"
              onClick={()=>{ saveProgress("lesson3") }}
            >
              Start Quiz
            </button>
          </Link>

        </div>

      </main>
    </>
  )
}