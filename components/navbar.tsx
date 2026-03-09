export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-linear-to-r from-black to-gray-900 text-white">
      <h1 className="font-bold text-2xl">GramAI🌾</h1>

      <div>
        <a href="/home" className="mr-4">Home</a>
        <a href="/course" className="mr-4">Courses</a>
        <a href="/AskAI" className="mr-4">AskAI❓</a>
      </div>
    </nav>
  )
}