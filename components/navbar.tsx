"use client"

import { useEffect, useState } from "react"
import AuthModal from "./AuthModal"

export default function Navbar() {

const [openAuth,setOpenAuth] = useState(false)
const [user,setUser] = useState<any>(null)
const [loaded,setLoaded] = useState(false)

useEffect(()=>{

const storedUser = localStorage.getItem("currentUser")

if(storedUser){
setUser(JSON.parse(storedUser))
}

setLoaded(true)

},[])

if(!loaded) return null

return (

<nav className="flex justify-between items-center px-5 py-2 bg-linear-to-r from-black to-gray-900 text-white">

<h1 className="font-bold text-2xl">GramAI🌾</h1>

<div className="flex items-center gap-4 text-base">

<a href="/home" className="hover:text-gray-300 transition">
Home
</a>

<a href="/course" className="hover:text-gray-300 transition">
Courses
</a>

<a href="/AskAI" className="hover:text-gray-300 transition">
AskAI <span className="text-red-400">❓</span>
</a>

<a href="/dashboard" className="hover:text-gray-300 transition">
Dashboard
</a>

{user ? (

<>
<span className="flex items-center gap-1">
👋 Welcome {user.name}
</span>

<button
className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
onClick={()=>{
localStorage.removeItem("currentUser")
location.reload()
}}
>
Logout
</button>
</>

) : (

<button
className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
onClick={()=>setOpenAuth(true)}
>
Login
</button>

)}

</div>

{openAuth && <AuthModal close={()=>setOpenAuth(false)} />}

</nav>

)
}