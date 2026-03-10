"use client"; // Required for useState in Next.js App Router

import { useState } from "react";
import Navbar from "../../components/navbar";
import Reminder from "../../components/reminder"


export default function HomePage() {
  const [lang, setLang] = useState("en");

  // 1. Translation Dictionary
  const translations = {
    en: {
      heroTitle: "GramAI🌾",
      heroSub: "AI-powered offline micro-learning platform designed to make digital skills accessible to rural communities across India.",
      demoBtn: "Try Demo",
      tipPrefix: "Tip from GramAI",
      problemTitle: "The Problem",
      prob1Title: "Limited Internet",
      prob1Desc: "Many rural areas in India lack stable internet connectivity, making online education difficult.",
      prob2Title: "Language Barriers",
      prob2Desc: "Most learning platforms are in English, creating accessibility challenges for regional language speakers.",
      prob3Title: "Skill Gap",
      prob3Desc: "Millions lack access to digital and technical skill training needed for modern jobs.",
      solutionTitle: "Our Solution",
      solutionDesc: "GramAI delivers short, voice-based AI lessons that work offline. Users can download micro-courses in their local language and learn essential digital skills anytime, anywhere.",
      featuresTitle: "Key Features",
      feat1Title: "Offline Learning",
      feat1Desc: "Download lessons and learn without internet.",
      feat2Title: "AI Voice Tutor",
      feat2Desc: "AI narrates lessons in regional languages.",
      feat3Title: "Micro Courses",
      feat3Desc: "5-10 minute lessons for quick skill development.",
      feat4Title: "Interactive Quizzes",
      feat4Desc: "Practice with short quizzes after each lesson.",
      howTitle: "How GramAI Works",
      step1: "Select a course in your preferred language.",
      step2: "Download lessons for offline learning.",
      step3: "Listen, learn, and complete quizzes to earn certificates.",
      visionTitle: "Our Vision",
      visionDesc: "GramAI aims to empower millions in rural communities with digital literacy, job-ready skills, and accessible AI-powered education.",
      tips: [
        "Use UPI apps like PhonePe or Google Pay to send money instantly.",
        "Water plants early in the morning to improve crop health.",
        "Never share your OTP with anyone, even if they claim to be from the bank.",
        "Saving a small amount every week builds long-term financial security.",
        "Learning basic smartphone skills can open new job opportunities."
      ]
    },
    hi: {
      heroTitle: "ग्रामAI🌾",
      heroSub: "एआई-संचालित ऑफलाइन माइक्रो-लर्निंग प्लेटफॉर्म जो ग्रामीण समुदायों के लिए डिजिटल कौशल को सुलभ बनाता है।",
      demoBtn: "डेमो देखें",
      tipPrefix: "ग्रामAI से सुझाव",
      problemTitle: "समस्या",
      prob1Title: "सीमित इंटरनेट",
      prob1Desc: "भारत के कई ग्रामीण क्षेत्रों में स्थिर इंटरनेट की कमी है, जिससे ऑनलाइन शिक्षा कठिन हो जाती है।",
      prob2Title: "भाषा की बाधाएं",
      prob2Desc: "अधिकांश शिक्षण प्लेटफॉर्म अंग्रेजी में हैं, जो क्षेत्रीय भाषा बोलने वालों के लिए चुनौती पैदा करते हैं।",
      prob3Title: "कौशल अंतर",
      prob3Desc: "लाखों लोगों के पास आधुनिक नौकरियों के लिए आवश्यक डिजिटल और तकनीकी प्रशिक्षण की कमी है।",
      solutionTitle: "हमारा समाधान",
      solutionDesc: "ग्रामAI छोटे, आवाज-आधारित एआई पाठ प्रदान करता है जो ऑफलाइन काम करते हैं। उपयोगकर्ता अपनी स्थानीय भाषा में कोर्स डाउनलोड कर सकते हैं।",
      featuresTitle: "मुख्य विशेषताएं",
      feat1Title: "ऑफलाइन लर्निंग",
      feat1Desc: "बिना इंटरनेट के पाठ डाउनलोड करें और सीखें।",
      feat2Title: "एआई वॉयस ट्यूटर",
      feat2Desc: "एआई क्षेत्रीय भाषाओं में पाठ सुनाता है।",
      feat3Title: "माइक्रो कोर्स",
      feat3Desc: "त्वरित कौशल विकास के लिए 5-10 मिनट के पाठ।",
      feat4Title: "इंटरएक्टिव क्विज़",
      feat4Desc: "प्रत्येक पाठ के बाद छोटे क्विज़ के साथ अभ्यास करें।",
      howTitle: "ग्रामAI कैसे काम करता है",
      step1: "अपनी पसंदीदा भाषा में एक कोर्स चुनें।",
      step2: "ऑफलाइन सीखने के लिए पाठ डाउनलोड करें।",
      step3: "सुनें, सीखें और प्रमाण पत्र प्राप्त करने के लिए क्विज़ पूरा करें।",
      visionTitle: "हमारा विजन",
      visionDesc: "ग्रामAI का लक्ष्य ग्रामीण समुदायों को डिजिटल साक्षरता और नौकरी के लिए तैयार कौशल के साथ सशक्त बनाना है।",
      tips: [
        "पैसे तुरंत भेजने के लिए PhonePe या Google Pay जैसे UPI ऐप का उपयोग करें।",
        "फसल के स्वास्थ्य में सुधार के लिए सुबह जल्दी पौधों को पानी दें।",
        "अपना ओटीपी कभी किसी के साथ साझा न करें, चाहे वे बैंक से होने का दावा करें।",
        "हर हफ्ते थोड़ी सी बचत करना दीर्घकालिक वित्तीय सुरक्षा बनाता है।",
        "स्मार्टफोन कौशल सीखना नौकरी के नए अवसर खोल सकता है।"
      ]
    },
    ta: {
      heroTitle: "கிராம்AI🌾",
      heroSub: "கிராமப்புற மக்களுக்காக டிஜிட்டல் திறன்களை எளிதாகக் கொண்டு செல்லும் வகையில் உருவாக்கப்பட்ட AI-ஆஃப்லைன் தளம்.",
      demoBtn: "டெமோவை முயற்சிக்கவும்",
      tipPrefix: "கிராம்AI-இன் குறிப்பு",
      problemTitle: "பிரச்சனை",
      prob1Title: "வரம்புக்குட்பட்ட இணையம்",
      prob1Desc: "பல கிராமப்புற பகுதிகளில் நிலையான இணையம் இல்லாததால் ஆன்லைன் கல்வி கடினமாக உள்ளது.",
      prob2Title: "மொழி தடைகள்",
      prob2Desc: "பெரும்பாலான கற்றல் தளங்கள் ஆங்கிலத்தில் இருப்பதால் பிராந்திய மொழி பேசுபவர்களுக்கு சிரமம் ஏற்படுகிறது.",
      prob3Title: "திறன் இடைவெளி",
      prob3Desc: "நவீன வேலைகளுக்குத் தேவையான டிஜிட்டல் மற்றும் தொழில்நுட்ப பயிற்சி மில்லியன் கணக்கானவர்களுக்குக் கிடைப்பதில்லை.",
      solutionTitle: "எங்கள் தீர்வு",
      solutionDesc: "கிராம்AI ஆஃப்லைனில் வேலை செய்யக்கூடிய குறுகிய, குரல் சார்ந்த AI பாடங்களை வழங்குகிறது. பயனர்கள் தங்கள் தாய்மொழியில் கற்றுக்கொள்ளலாம்.",
      featuresTitle: "முக்கிய அம்சங்கள்",
      feat1Title: "ஆஃப்லைன் கற்றல்",
      feat1Desc: "இணையம் இல்லாமல் பாடங்களை பதிவிறக்கம் செய்து கற்றுக்கொள்ளுங்கள்.",
      feat2Title: "AI குரல் ஆசிரியர்",
      feat2Desc: "AI பிராந்திய மொழிகளில் பாடங்களை விவரிக்கிறது.",
      feat3Title: "மைக்ரோ படிப்புகள்",
      feat3Desc: "விரைவான திறன் மேம்பாட்டிற்காக 5-10 நிமிட பாடங்கள்.",
      feat4Title: "ஊடாடும் வினாடி வினா",
      feat4Desc: "ஒவ்வொரு பாடத்திற்கும் பிறகு வினாடி வினாக்களுடன் பயிற்சி செய்யுங்கள்.",
      howTitle: "கிராம்AI எப்படி செயல்படுகிறது",
      step1: "உங்களுக்கு விருப்பமான மொழியில் ஒரு படிப்பைத் தேர்ந்தெடுக்கவும்.",
      step2: "ஆஃப்லைன் கற்றலுக்கான பாடங்களைப் பதிவிறக்கவும்.",
      step3: "கவனித்து, கற்றுக்கொண்டு, சான்றிதழ்களைப் பெற வினாடி வினாக்களை முடிக்கவும்.",
      visionTitle: "எங்கள் பார்வை",
      visionDesc: "கிராமப்புற சமூகங்களுக்கு டிஜிட்டல் அறிவு மற்றும் வேலைவாய்ப்பு திறன்களை வழங்குவதே கிராம்AI-இன் நோக்கம்.",
      tips: [
        "உடனடியாக பணம் அனுப்ப PhonePe அல்லது Google Pay போன்ற UPI ஆப்ஸ்களைப் பயன்படுத்தவும்.",
        "பயிர் ஆரோக்கியத்தை மேம்படுத்த அதிகாலையில் செடிகளுக்கு நீர் ஊற்றவும்.",
        "வங்கியிலிருந்து அழைப்பதாகக் கூறினாலும் உங்கள் OTP-யை யாருடனும் பகிர வேண்டாம்.",
        "ஒவ்வொரு வாரமும் ஒரு சிறிய தொகையைச் சேமிப்பது நீண்ட கால நிதி பாதுகாப்பை உருவாக்குகிறது.",
        "அடிப்படை ஸ்மார்ட்போன் திறன்களைக் கற்றுக்கொள்வது புதிய வேலை வாய்ப்புகளை உருவாக்கும்."
      ]
    }
  };

  const content = translations[lang as keyof typeof translations];
  const todayTip = content.tips[new Date().getDate() % content.tips.length];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-r from-red-600 to-indigo-700 text-white">
        
        {/* LANGUAGE SELECTOR DROPDOWN */}
        <div className="flex justify-end px-6 pt-4">
          <select 
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg px-4 py-2 outline-none cursor-pointer hover:bg-white/30 transition-all"
          >
            <option value="en" className="text-black">English</option>
            <option value="hi" className="text-black">हिन्दी (Hindi)</option>
            <option value="ta" className="text-black">தமிழ் (Tamil)</option>
          </select>
        </div>

        {/* HERO SECTION */}
        <section className="text-white py-20 px-6 text-center">
          <h1 className="text-7xl font-bold">{content.heroTitle}</h1>
          <br />
          <p className="text-2xl max-w-2xl mx-auto">
            {content.heroSub}
          </p>

          <a href="/course">
            <button className="mt-8 bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {content.demoBtn}
            </button>
          </a>
          <br /><br />

          {/* SMALL DAILY TIP BOX */}
          <div className="mb-6 flex justify-center">
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-full p-4 text-white">
              🌱 {content.tipPrefix}: {todayTip}
            </div>
          </div>
        </section>

<hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

        <Reminder />

        <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

        {/* DAILY AI TIP */}
        <section className="py-10 px-6 max-w-3xl mx-auto text-center">
          <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-3">
              🌱 {content.tipPrefix}
            </h2>
            <p className="text-lg">{todayTip}</p>
          </div>
        </section>

        <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

        {/* PROBLEM SECTION */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-white">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-bold mb-10 bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 inline-fit text-center">
              {content.problemTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">{content.prob1Title}</h3>
              <p>{content.prob1Desc}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">{content.prob2Title}</h3>
              <p>{content.prob2Desc}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">{content.prob3Title}</h3>
              <p>{content.prob3Desc}</p>
            </div>
          </div>
        </section>

        <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

        {/* SOLUTION SECTION */}
        <section className="py-16 flex justify-center">
          <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">{content.solutionTitle}</h2>
            <p className="text-lg text-white">{content.solutionDesc}</p>
          </div>
        </section>

        <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

        {/* FEATURES SECTION */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-white">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-bold mb-10 bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 inline-fit text-center">
              {content.featuresTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold mb-3">{content.feat1Title}</h3>
              <p>{content.feat1Desc}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold mb-3">{content.feat2Title}</h3>
              <p>{content.feat2Desc}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold mb-3">{content.feat3Title}</h3>
              <p>{content.feat3Desc}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6">
              <h3 className="font-semibold mb-3">{content.feat4Title}</h3>
              <p>{content.feat4Desc}</p>
            </div>
          </div>
        </section>

        <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

        {/* HOW IT WORKS */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <h2 className="text-white text-3xl font-bold mb-10 bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 inline-fit text-center">
                {content.howTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-white mb-3">1</div>
                <p>{content.step1}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-white mb-3">2</div>
                <p>{content.step2}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-white mb-3">3</div>
                <p>{content.step3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-white">
            <h2 className="text-3xl font-bold mb-6">{content.visionTitle}</h2>
            <p className="text-lg">{content.visionDesc}</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>© 2026 GramAI | Built for Hackathons</p>
        </footer>

      </main>
    </>
  );
}