import Navbar from "../../components/navbar"
export default function HomePage() {
  return (
    <>
      <Navbar />

       <main className="min-h-screen bg-linear-to-r from-red-600 to-indigo-700 text-white">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-red-600 to-indigo-700 text-white py-20 px-6 text-center">


  <h1 className="text-7xl font-bold">GramAI🌾</h1>
  <br />
        <p className="text-2xl max-w-2xl mx-auto">
          AI-powered offline micro-learning platform designed to make digital
          skills accessible to rural communities across India.
        </p>
        <a href="/course">
        <button className="mt-8 bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Try Demo
        </button>
        </a>
      </section>

<hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

      {/* PROBLEM SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-black">
        <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold mb-10 bg-gray-100 shadow-md rounded-xl p-6 inline-fit text-center">
          The Problem
        </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-100 shadow-md rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">Limited Internet</h3>
            <p>
              Many rural areas in India lack stable internet connectivity,
              making online education difficult.
            </p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">Language Barriers</h3>
            <p>
              Most learning platforms are in English, creating accessibility
              challenges for regional language speakers.
            </p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">Skill Gap</h3>
            <p>
              Millions lack access to digital and technical skill training
              needed for modern jobs.
            </p>
          </div>

        </div>
      </section>

      <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

      {/* SOLUTION SECTION */}
 <section className="py-16 flex justify-center">
  <div className="bg-gray-100 rounded-2xl shadow-lg px-10 py-8 max-w-3xl text-center">

    <h2 className="text-3xl font-bold mb-4 text-black">
      Our Solution
    </h2>

    <p className="text-lg text-black">
      GramAI delivers short, voice-based AI lessons that work offline.
      Users can download micro-courses in their local language and learn
      essential digital skills anytime, anywhere.
    </p>

  </div>
</section>

   <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-black">

         <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold mb-10 bg-gray-100 shadow-md rounded-xl p-6 inline-fit text-center">
          Key Features
        </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-100 shadow-lg rounded-xl p-6">
            <h3 className="font-semibold mb-3">Offline Learning</h3>
            <p>Download lessons and learn without internet.</p>
          </div>

          <div className="bg-gray-100 shadow-lg rounded-xl p-6">
            <h3 className="font-semibold mb-3">AI Voice Tutor</h3>
            <p>AI narrates lessons in regional languages.</p>
          </div>

          <div className="bg-gray-100 shadow-lg rounded-xl p-6">
            <h3 className="font-semibold mb-3">Micro Courses</h3>
            <p>5-10 minute lessons for quick skill development.</p>
          </div>

          <div className="bg-gray-100 shadow-lg rounded-xl p-6">
            <h3 className="font-semibold mb-3">Interactive Quizzes</h3>
            <p>Practice with short quizzes after each lesson.</p>
          </div>

        </div>

      </section>

      <hr className="border-black border-t-2 my-16 w-3/4 mx-auto" />

      {/* HOW IT WORKS */}
      <section className="bg-linear-to-r from-red-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">

           <div className="flex justify-center mb-12">
        <h2 className=" text-black text-3xl font-bold mb-10 bg-gray-100 shadow-md rounded-xl p-6 inline-fit text-center">
          How GramAI Works
        </h2>
        </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-gray-100 shadow-lg rounded-xl p-6 text-black">
              <div className="text-3xl font-bold text-black mb-3">1</div>
              <p>Select a course in your preferred language.</p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-xl p-6 text-black">
              <div className="text-3xl font-bold text-black mb-3">2</div>
              <p>Download lessons for offline learning.</p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-xl p-6 text-black">
              <div className="text-3xl font-bold text-black mb-3">3</div>
              <p>Listen, learn, and complete quizzes to earn certificates.</p>
            </div>

          </div>

        </div>
      </section>




      {/* IMPACT SECTION */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
<div className="bg-gray-100 shadow-lg rounded-xl p-6 text-black">
        <h2 className="text-3xl font-bold mb-6">
          Our Vision
        </h2>

        <p className="text-lg">
          GramAI aims to empower millions in rural communities with digital
          literacy, job-ready skills, and accessible AI-powered education.
        </p>
</div>
      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 GramAI | Built for Hackathons</p>
      </footer>

    </main>
    </>
  )
}