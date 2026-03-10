"use client"

import { useEffect, useState } from "react"
import Navbar from "../../components/navbar"

export default function Dashboard() {

const [user,setUser] = useState<any>(null)
const [progress,setProgress] = useState<string[]>([])
const [certificates,setCertificates] = useState<string[]>([])
const [loaded,setLoaded] = useState(false)

useEffect(()=>{

const storedUser = localStorage.getItem("currentUser")

if(storedUser){

const parsedUser = JSON.parse(storedUser)
setUser(parsedUser)

const progressData = JSON.parse(localStorage.getItem("progress") || "{}")
const certData = JSON.parse(localStorage.getItem("certificates") || "{}")

setProgress(progressData[parsedUser.email] || [])
setCertificates(certData[parsedUser.email] || [])

}

setLoaded(true)

},[])

if(!loaded) return null

return (

<>
<Navbar />

<main className="min-h-screen bg-linear-to-r from-red-600 to-indigo-700 text-white py-16">

<div className="max-w-4xl mx-auto text-center">

<h1 className="text-4xl font-bold mb-8">
👤 User Dashboard
</h1>

{user ? (

<div className="bg-white text-black rounded-xl p-8 shadow-lg">

<h2 className="text-2xl font-bold mb-4">
Welcome {user.name}
</h2>

<p className="mb-6">{user.email}</p>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-gray-100 p-6 rounded-lg">
<h3 className="font-bold text-xl mb-2">📚 Lessons Completed</h3>
<p>{progress.length}</p>
</div>

<div className="bg-gray-100 p-6 rounded-lg">
<h3 className="font-bold text-xl mb-2">🏆 Certificates Earned</h3>
<p>{certificates.length}</p>
</div>

</div>

</div>

) : (

<p>Please login first.</p>

)}

</div>

</main>

</>

)

}