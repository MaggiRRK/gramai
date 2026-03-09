"use client"

import { useState } from "react"
import Navbar from "../../../components/navbar"
import Link from "next/link"
import ProgressBar from "../../../components/progressbar"

export default function Lesson2() {

  const [lang, setLang] = useState<"en" | "ta">("en")

  const content = {
    en: {
      title: "Lesson 2: Introducing your AI assistant",
      text: "Vanakkam! Welcome to your new way of farming. We know you have years of experience in your fields—that wisdom is irreplaceable. What we are doing today is simply giving you an extra pair of eyes to help make your hard work even more productive. Starting today, you will receive a simple message on your phone every morning at 7:00 AM. Think of this as your Daily Digital Assistant. It uses satellite cameras high above in space to look at your specific fields and combines that with the latest weather forecasts to give you advice before you even step out of your house. Every morning, your assistant sends you three key pieces of information to help you plan your day: The Weather Forecast — You will know exactly what to expect; if rain is coming, if it will be unusually hot, or if strong winds are expected. This helps you plan your day around the weather instead of being caught by surprise. Field & Soil Status — The satellite “Eye in the Sky” checks your field’s health and can tell if your soil is dry and needs water, or if it is already moist enough so you don't waste your effort or electricity. Actionable Farming Advice — Instead of just giving you data, the assistant gives you a task such as: “The soil is still damp from yesterday—do not pump water today to save electricity.” “Strong winds are coming at noon—if you need to spray, do it before 9:00 AM so the medicine stays on the crops.” “Early signs of dryness detected in the north corner—check that section today.” This matters because you save resources by using water, fertilizer, or electricity exactly when and where your field needs it instead of guessing; you protect your harvest by detecting early signs of heat stress or pest issues from satellite images so you can act days before visible damage appears; and it is built for you because you don't need a computer, a high-end smartphone, or a data plan since the message comes to you in your own language, designed to make your daily work easier, cheaper, and more successful. Your land is your livelihood, and we are simply here to help you get the best out of it every single day. Keep your phone handy for your first 7:00 AM message tomorrow!",
      audio: "/lesson2-en.mp3"
    },
    ta: {
      title: "பாடம் 2: உங்கள் AI உதவியாளரை அறிமுகப்படுத்துதல்",
      text: "பின்வரும் ஸ்கிரிப்ட், விவசாயிகளுக்கு காலை 7:00 மணி தினசரி ஆலோசகர் செய்தியை விளக்குகிறது, இது நடைமுறை, அன்றாட வழிகாட்டுதலை வழங்க செயற்கைக்கோள் தரவை எவ்வாறு பயன்படுத்துகிறது என்பதில் கவனம் செலுத்துகிறது. அறிமுகம்: உங்கள் தினசரி விவசாய உதவியாளர். வணக்கம்! உங்கள் புதிய விவசாய முறைக்கு வரவேற்கிறோம். உங்கள் வயல்களில் உங்களுக்கு பல வருட அனுபவம் இருப்பதை நாங்கள் அறிவோம் - அந்த ஞானம் ஈடுசெய்ய முடியாதது. இன்று நாங்கள் செய்வது உங்கள் கடின உழைப்பை இன்னும் அதிக உற்பத்தித் திறன் கொண்டதாக மாற்ற உதவும் கூடுதல் கண்களை உங்களுக்கு வழங்குவதாகும். இன்று முதல், தினமும் காலை 7:00 மணிக்கு உங்கள் தொலைபேசியில் ஒரு எளிய செய்தியைப் பெறுவீர்கள். இதை உங்கள் தினசரி டிஜிட்டல் உதவியாளராக நினைத்துப் பாருங்கள். இது உங்கள் குறிப்பிட்ட வயல்களைப் பார்க்க விண்வெளியில் உயரமான செயற்கைக்கோள் கேமராக்களைப் பயன்படுத்துகிறது மற்றும் உங்கள் வீட்டை விட்டு வெளியேறுவதற்கு முன்பே உங்களுக்கு ஆலோசனை வழங்க சமீபத்திய வானிலை முன்னறிவிப்புகளுடன் அதை இணைக்கிறது. காலை 7:00 மணி செய்தி உங்களுக்கு என்ன செய்கிறது: தினமும் காலையில், உங்கள் உதவியாளர் உங்கள் நாளைத் திட்டமிட உதவும் மூன்று முக்கிய தகவல்களை உங்களுக்கு அனுப்புகிறார். வானிலை முன்னறிவிப்பு: மழை வருகிறதா, வழக்கத்திற்கு மாறாக வெப்பமாக இருக்குமா, அல்லது பலத்த காற்று எதிர்பார்க்கப்படுகிறதா என்பதை நீங்கள் சரியாக அறிந்துகொள்வீர்கள். இது உங்கள் நாளை வானிலைக்கு ஏற்ப திட்டமிட உதவுகிறது, ஆச்சரியத்தில் சிக்கிக் கொள்ளாமல். வயல் மற்றும் மண் நிலை: 'ஐ இன் தி ஸ்கை' என்ற செயற்கைக்கோள் உங்கள் வயலின் ஆரோக்கியத்தை சரிபார்க்கிறது. உங்கள் மண் வறண்டு, தண்ணீர் தேவையா, அல்லது ஏற்கனவே போதுமான ஈரப்பதமாக உள்ளதா என்பதை இது அறியும், எனவே உங்கள் முயற்சியையோ அல்லது மின்சாரத்தையோ வீணாக்காதீர்கள். செயல்படக்கூடிய விவசாய ஆலோசனை: உங்களுக்கு தரவை மட்டும் வழங்குவதற்குப் பதிலாக, உதவியாளர் உங்களுக்கு ஒரு பணியைத் தருகிறார்: “மண் நேற்றைய ஈரப்பதமாக உள்ளது—மின்சாரத்தைச் சேமிக்க இன்று தண்ணீரை பம்ப் செய்ய வேண்டாம்.” “மதியம் பலத்த காற்று வீசுகிறது—நீங்கள் தெளிக்க வேண்டியிருந்தால், காலை 9:00 மணிக்கு முன் அதைச் செய்யுங்கள், இதனால் மருந்து பயிர்களில் இருக்கும்.” “வடக்கு மூலையில் வறட்சியின் ஆரம்ப அறிகுறிகள் கண்டறியப்பட்டன—இன்றே அந்தப் பகுதியைச் சரிபார்க்கவும்.” இது ஏன் முக்கியமானது: நீங்கள் வளங்களைச் சேமிக்கிறீர்கள், உங்கள் வயலுக்கு அது தேவைப்படும்போது தண்ணீர், உரம் அல்லது மின்சாரத்தை சரியாகப் பயன்படுத்துகிறீர்கள், யூகிப்பதைத் தவிர்க்கிறீர்கள். உங்கள் அறுவடையைப் பாதுகாக்கிறீர்கள், செயற்கைக்கோள் படங்களிலிருந்து வெப்ப அழுத்தம் அல்லது பூச்சி பிரச்சினைகளின் ஆரம்ப அறிகுறிகளைக் கண்டறிவதன் மூலம், உங்கள் கண்களால் சேதத்தைப் பார்ப்பதற்கு சில நாட்களுக்கு முன்பே நீங்கள் செயல்படலாம். இது உங்களுக்காக உருவாக்கப்பட்டது, உங்களுக்கு கணினி தேவையில்லை, உயர்நிலை ஸ்மார்ட்போன் தேவையில்லை, தரவுத் திட்டமும் தேவையில்லை. இந்தச் செய்தி உங்கள் சொந்த மொழியில் உங்களுக்கு வருகிறது, இது உங்கள் அன்றாட வேலையை எளிதாக்கவும், மலிவாகவும், மேலும் வெற்றிகரமாகவும் மாற்ற வடிவமைக்கப்பட்டுள்ளது. உங்கள் நிலம் உங்கள் வாழ்வாதாரம். ஒவ்வொரு நாளும் அதிலிருந்து சிறந்ததைப் பெற உங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம். நாளை காலை 7:00 மணிக்கு உங்கள் முதல் செய்திக்கு உங்கள் தொலைபேசியை கையில் வைத்திருங்கள்!",
      audio: "/lesson2-ta.mp3"
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
            <button className="bg-linear-to-r from-red-600 to-indigo-700 text-white px-6 py-2 rounded">
              Next Lesson
            </button>
          </Link>

        </div>

      </main>
    </>
  )
}