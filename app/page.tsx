import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center h-screen">
        
        <h1 className="text-6xl font-bold">
          GramAI
        </h1>

        <p className="mt-4 text-2xl">
          Learn AI skills in 10 minutes
        </p>
<br />
        <a
          href="/home"
          className="bg-linear-to-r from-red-600 to-indigo-700 text-white  px-6 py-3 rounded-lg">
        
          Start Learning
        </a>
      </main>
  )
}
