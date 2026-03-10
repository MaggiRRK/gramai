"use client"

import { useState, useRef } from "react"
import Navbar from "../../components/navbar"
import html2canvas from "html2canvas"

// Helper to save certificate status to localStorage
function saveCertificate(courseName: string) {
  if (typeof window === "undefined") return
  const storedUser = localStorage.getItem("currentUser")
  const user = storedUser ? JSON.parse(storedUser) : null

  if (!user) return

  const certificates = JSON.parse(localStorage.getItem("certificates") || "{}")
  if (!certificates[user.email]) {
    certificates[user.email] = []
  }

  if (!certificates[user.email].includes(courseName)) {
    certificates[user.email].push(courseName)
  }

  localStorage.setItem("certificates", JSON.stringify(certificates))
}

const quizData = {
  en: {
    title: "GramAI Quiz",
    questionLabel: "Question",
    completeTitle: "Quiz Complete",
    scoreLabel: "Score",
    percentageLabel: "Percentage",
    failMessage: "Score below 40%. Please try again.",
    downloadBtn: "Download Certificate",
    certTitle: "Certificate of Completion",
    certSub: "This certificate is proudly presented to",
    certCourse: "for successfully completing the course",
    certCourseName: "GramAI Smart Farming Basics",
    certTeam: "GramAI Learning Team",
    questions: [
      {
        question: "What is the primary role of the GramAI 'Daily Digital Assistant'?",
        options: ["To replace the farmer's traditional knowledge", "To act as a supportive partner providing data-driven insights", "To automate all physical farm labor"],
        answer: 1,
      },
      {
        question: "Why is the 7:00 AM daily message effective for rural farmers?",
        options: ["It requires high-speed 5G internet", "It uses standard cellular networks to deliver clear advice", "It requires the farmer to visit a computer center"],
        answer: 1,
      },
      {
        question: "What does the 'Eye in the Sky' satellite detect early?",
        options: ["Future market prices", "Early signs of crop stress", "Arrival of market traders"],
        answer: 1,
      },
      {
        question: "Why might the assistant suggest skipping irrigation?",
        options: ["System is broken", "Rain expected or soil moisture already sufficient", "Water use not allowed"],
        answer: 1,
      },
      {
        question: "Why spray pesticides before 9:30 AM?",
        options: ["Only works in dark", "Winds lighter and heat lower", "Insects are sleeping"],
        answer: 1,
      },
      {
        question: "Why target pest control to specific sections?",
        options: ["Use more chemicals", "Save money and protect soil health", "Force pests to move farms"],
        answer: 1,
      },
      {
        question: "How does GramAI simplify weather info?",
        options: ["Complex weather maps", "Combines forecast with field needs", "Ignores weather"],
        answer: 1,
      },
      {
        question: "Advantage of satellite alerts?",
        options: ["Manual inspection impossible", "Early detection across entire field", "Satellites spray pesticides"],
        answer: 1,
      },
      {
        question: "How does GramAI help farmers act as business managers?",
        options: ["Data-driven decisions reducing waste", "Stop working in field", "Automatically sell crops"],
        answer: 0,
      },
      {
        question: "Main requirement for GramAI success?",
        options: ["Large budget", "Willingness to learn using mobile technology", "Software engineering degree"],
        answer: 1,
      },
    ]
  },
  hi: {
    title: "ग्रामAI प्रश्नोत्तरी",
    questionLabel: "प्रश्न",
    completeTitle: "प्रश्नोत्तरी पूर्ण हुई",
    scoreLabel: "स्कोर",
    percentageLabel: "प्रतिशत",
    failMessage: "स्कोर 40% से कम है। कृपया पुन: प्रयास करें।",
    downloadBtn: "प्रमाण पत्र डाउनलोड करें",
    certTitle: "पूर्णता का प्रमाण पत्र",
    certSub: "यह प्रमाण पत्र गर्व के साथ प्रस्तुत किया गया है",
    certCourse: "सफलतापूर्वक पाठ्यक्रम पूरा करने के लिए",
    certCourseName: "ग्रामAI स्मार्ट खेती की बुनियादी बातें",
    certTeam: "ग्रामAI लर्निंग टीम",
    questions: [
      {
        question: "ग्रामAI 'डेली डिजिटल असिस्टेंट' की प्राथमिक भूमिका क्या है?",
        options: ["किसान के पारंपरिक ज्ञान को बदलना", "डेटा-संचालित अंतर्दृष्टि प्रदान करने वाला सहयोगी साथी", "सभी शारीरिक कृषि श्रम को स्वचालित करना"],
        answer: 1,
      },
      {
        question: "ग्रामीण किसानों के लिए सुबह 7:00 बजे का दैनिक संदेश क्यों प्रभावी है?",
        options: ["इसके लिए हाई-स्पीड 5G इंटरनेट चाहिए", "यह सलाह देने के लिए मानक सेलुलर नेटवर्क का उपयोग करता है", "किसान को कंप्यूटर सेंटर जाना पड़ता है"],
        answer: 1,
      },
      {
        question: "सैटेलाइट 'आई इन द स्काई' सबसे पहले क्या पता लगाता है?",
        options: ["भविष्य के बाजार मूल्य", "फसल तनाव के शुरुआती संकेत", "बाजार व्यापारियों का आगमन"],
        answer: 1,
      },
      {
        question: "असिस्टेंट सिंचाई छोड़ने का सुझाव क्यों दे सकता है?",
        options: ["सिस्टम खराब है", "बारिश की उम्मीद या मिट्टी की नमी पर्याप्त है", "पानी के उपयोग की अनुमति नहीं है"],
        answer: 1,
      },
      {
        question: "सुबह 9:30 बजे से पहले कीटनाशकों का छिड़काव क्यों करें?",
        options: ["केवल अंधेरे में काम करता है", "हवाएं हल्की और गर्मी कम होती है", "कीड़े सो रहे हैं"],
        answer: 1,
      },
      {
        question: "कीट नियंत्रण को विशिष्ट वर्गों तक ही क्यों लक्षित करें?",
        options: ["अधिक रसायनों का उपयोग करने के लिए", "पैसा बचाएं और मिट्टी के स्वास्थ्य की रक्षा करें", "कीड़ों को खेत से भगाने के लिए"],
        answer: 1,
      },
      {
        question: "ग्रामAI मौसम की जानकारी को कैसे सरल बनाता है?",
        options: ["जटिल मौसम मानचित्रों द्वारा", "पूर्वानुमान को खेत की जरूरतों के साथ जोड़कर", "मौसम को नज़रअंदाज़ करके"],
        answer: 1,
      },
      {
        question: "सैटेलाइट अलर्ट का क्या फायदा है?",
        options: ["शारीरिक निरीक्षण असंभव है", "पूरे खेत में शुरुआती पहचान", "सैटेलाइट कीटनाशकों का छिड़काव करते हैं"],
        answer: 1,
      },
      {
        question: "ग्रामAI किसानों को बिजनेस मैनेजर के रूप में कार्य करने में कैसे मदद करता है?",
        options: ["डेटा-संचालित निर्णयों से बर्बादी कम होती है", "खेत में काम करना बंद करना", "स्वचालित रूप से फसलें बेचना"],
        answer: 0,
      },
      {
        question: "ग्रामAI की सफलता के लिए मुख्य आवश्यकता क्या है?",
        options: ["बड़ा बजट", "मोबाइल तकनीक का उपयोग करके सीखने की इच्छा", "सॉफ्टवेयर इंजीनियरिंग डिग्री"],
        answer: 1,
      },
    ]
  },
  ta: {
    title: "GramAI வினாடி வினா",
    questionLabel: "கேள்வி",
    completeTitle: "வினாடி வினா முடிந்தது",
    scoreLabel: "மதிப்பெண்",
    percentageLabel: "சதவீதம்",
    failMessage: "மதிப்பெண் 40% க்கும் குறைவு. மீண்டும் முயற்சிக்கவும்.",
    downloadBtn: "சான்றிதழைப் பதிவிறக்கவும்",
    certTitle: "சான்றிதழ்",
    certSub: "இந்த சான்றிதழ் பெருமையுடன் வழங்கப்படுகிறது",
    certCourse: "படிப்பை வெற்றிகரமாக முடித்ததற்காக",
    certCourseName: "GramAI ஸ்மார்ட் விவசாய அடிப்படைகள்",
    certTeam: "GramAI கற்றல் குழு",
    questions: [
      {
        question: "GramAI தினசரி டிஜிட்டல் உதவியாளரின் முக்கிய பங்கு என்ன?",
        options: ["விவசாயியின் பாரம்பரிய அறிவை மாற்றுவது", "தரவு அடிப்படையிலான ஆலோசனைகளை வழங்கும் துணை உதவியாளர்", "அனைத்து வேலைகளையும் தானியங்கி செய்வது"],
        answer: 1,
      },
      {
        question: "காலை 7 மணி செய்தி ஏன் பயனுள்ளதாக உள்ளது?",
        options: ["5G இணையம் தேவை", "சாதாரண மொபைல் நெட்வொர்க்கில் வரும்", "கம்ப்யூட்டர் மையத்திற்கு செல்ல வேண்டும்"],
        answer: 1,
      },
      {
        question: "செயற்கைக்கோள் எதை முன்கூட்டியே கண்டறியும்?",
        options: ["சந்தை விலை", "பயிர் அழுத்தம் அல்லது மண் வறட்சி", "வியாபாரிகள் வருகை"],
        answer: 1,
      },
      {
        question: "ஏன் நீர்ப்பாசனம் தவிர்க்க சொல்லலாம்?",
        options: ["சிஸ்டம் பழுதானது", "மண் ஈரப்பதம் போதுமானது அல்லது மழை வரும்", "தண்ணீர் பயன்படுத்த அனுமதி இல்லை"],
        answer: 1,
      },
      {
        question: "ஏன் காலை 9:30க்கு முன் தெளிக்க வேண்டும்?",
        options: ["இருட்டில் மட்டுமே வேலை செய்கிறது", "காற்று குறைவு மற்றும் வெப்பம் குறைவு", "பூச்சிகள் தூங்கும்"],
        answer: 1,
      },
      {
        question: "ஏன் ஒரு பகுதியை மட்டும் சிகிச்சை செய்ய வேண்டும்?",
        options: ["அதிக வேதிப்பொருள் பயன்படுத்த", "பணம் சேமித்து மண் ஆரோக்கியம் காக்க", "பூச்சிகள் வேறு பண்ணைக்கு செல்ல"],
        answer: 1,
      },
      {
        question: "GramAI வானிலை தகவலை எவ்வாறு எளிதாக்குகிறது?",
        options: ["சிக்கலான வரைபடங்கள்", "வானிலை + வயல் தேவைகளை இணைக்கிறது", "வானிலையை புறக்கணிக்கிறது"],
        answer: 1,
      },
      {
        question: "செயற்கைக்கோள் எச்சரிக்கையின் நன்மை என்ன?",
        options: ["கைமுறையாக பார்க்க முடியாது", "முழு வயலிலும் முன்கூட்டியே கண்டறிதல்", "செயற்கைக்கோள் பூச்சி மருந்து தெளிக்கும்"],
        answer: 1,
      },
      {
        question: "GramAI விவசாயியை வணிக மேலளராக எப்படி உதவுகிறது?",
        options: ["தரவு அடிப்படையில் முடிவெடுக்க உதவும்", "வேலை நிறுத்த அனுமதி", "பயிர்களை தானாக விற்பனை"],
        answer: 0,
      },
      {
        question: "GramAI வெற்றிக்கான முக்கிய தேவையானது என்ன?",
        options: ["பெரிய முதலீடு", "மொபைல் தொழில்நுட்பத்தை பயன்படுத்தும் மனப்பான்மை", "சாப்ட்வேர் பட்டம்"],
        answer: 1,
      },
    ]
  },
}

export default function QuizPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "ta">("en")
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const certificateRef = useRef<HTMLDivElement>(null)
  const content = quizData[language]
  const questions = content.questions

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
    link.download = `GramAI-Certificate-${language}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const percentage = Math.round((score / questions.length) * 100)

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-r from-red-600 to-indigo-700 p-10 text-white">
        <div className="max-w-2xl mx-auto">
          {/* LANGUAGE SELECTOR */}
          <div className="mb-10 flex justify-center gap-4">
            {["en", "hi", "ta"].map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLanguage(l as any)
                  setCurrent(0)
                  setScore(0)
                  setFinished(false)
                }}
                className={`px-4 py-2 rounded-lg backdrop-blur-md border border-white/30 transition-all ${
                  language === l ? "bg-white text-indigo-700 font-bold" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {l === "en" ? "English" : l === "hi" ? "हिन्दी" : "தமிழ்"}
              </button>
            ))}
          </div>

          {!finished ? (
            <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8">
              <h1 className="text-3xl font-bold mb-6 text-center">{content.title}</h1>
              <p className="text-xl mb-8 font-medium">
                {questions[current].question}
              </p>

              <div className="space-y-4">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => answerQuestion(i)}
                    className="block w-full bg-white/10 hover:bg-white/30 border border-white/20 text-white text-left px-5 py-4 rounded-xl transition-all shadow-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center text-white/70">
                <p>{content.questionLabel} {current + 1} / {questions.length}</p>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-white transition-all duration-300" 
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                   ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8 mb-10">
                <h1 className="text-4xl font-bold mb-6">{content.completeTitle}</h1>
                <div className="flex justify-center gap-10 text-2xl mb-4">
                  <p>{content.scoreLabel}: <span className="font-bold">{score} / {questions.length}</span></p>
                  <p>{content.percentageLabel}: <span className="font-bold">{percentage}%</span></p>
                </div>
              </div>

              {percentage >= 40 ? (
                <>
                  <div className="overflow-hidden h-0 w-0">
                    <div
                      ref={certificateRef}
                      className="bg-white p-16 text-center"
                      style={{
                        width: "1000px",
                        border: "12px double #2e7d32",
                        color: "#000",
                        fontFamily: "serif"
                      }}
                    >
                      <div style={{ marginBottom: "30px" }}>
                        <h1 style={{ fontSize: "52px", fontWeight: "bold", color: "#2e7d32" }}>
                          🌾 GramAI
                        </h1>
                        <p style={{ fontSize: "18px", letterSpacing: "2px" }}>AI POWERED FARMING ASSISTANT</p>
                      </div>

                      <h2 style={{ fontSize: "42px", fontWeight: "bold", margin: "40px 0", textDecoration: "underline" }}>
                        {content.certTitle}
                      </h2>

                      <p style={{ fontSize: "22px" }}>{content.certSub}</p>
                      <h3 style={{ fontSize: "36px", fontWeight: "bold", margin: "20px 0", borderBottom: "2px solid #333", display: "inline-block", padding: "0 40px" }}>
                        Farmer Participant
                      </h3>

                      <p style={{ fontSize: "22px", margin: "20px 0" }}>{content.certCourse}</p>
                      <h3 style={{ fontSize: "34px", fontWeight: "bold", color: "#2e7d32" }}>
                        {content.certCourseName}
                      </h3>

                      <p style={{ fontSize: "22px", marginTop: "30px" }}>
                        Final Score: <strong>{percentage}%</strong>
                      </p>

                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "80px", padding: "0 50px" }}>
                        <div style={{ textAlign: "center" }}>
                          <p style={{ borderTop: "2px solid #000", width: "250px" }}></p>
                          <p style={{ fontSize: "18px", marginTop: "10px" }}>{content.certTeam}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <p style={{ borderTop: "2px solid #000", width: "250px" }}></p>
                          <p style={{ fontSize: "18px", marginTop: "10px" }}>Date: {new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      downloadCertificate()
                      saveCertificate("Digital Skills Course")
                    }}
                    className="bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-transform"
                  >
                    ✨ {content.downloadBtn}
                  </button>
                </>
              ) : (
                <div className="bg-red-500/20 backdrop-blur-md border border-red-500/40 p-6 rounded-xl">
                  <p className="text-white text-2xl font-bold italic">{content.failMessage}</p>
                  <button 
                    onClick={() => {setCurrent(0); setScore(0); setFinished(false)}}
                    className="mt-4 text-white underline"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  )
}