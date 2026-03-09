import Navbar from "../../components/navbar"

export default function CoursePage() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">
          Courses
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="border p-6 rounded">
            <h2 className="text-xl font-bold">Intro to AI</h2>
            <p>Learn basics of Artificial Intelligence</p>
            <a href="/lessons/lesson1">
              <button className="mt-4 bg-linear-to-r from-red-600 to-indigo-700 text-white px-4 py-2 rounded">
                Start
              </button>
            </a>
          </div>

        </div>
      </main>
    </>
  )
}