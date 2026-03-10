"use client"

import { useState } from "react"

export default function AuthModal({ close }) {

const [isLogin, setIsLogin] = useState(true)
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function handleRegister(){

const users = JSON.parse(localStorage.getItem("users") || "[]")

users.push({ name, email, password })

localStorage.setItem("users", JSON.stringify(users))

alert("Registered successfully!")

setIsLogin(true)

}

function handleLogin(){

const users = JSON.parse(localStorage.getItem("users") || "[]")

const user = users.find(
u => u.email === email && u.password === password
)

if(user){

localStorage.setItem("currentUser", JSON.stringify(user))

alert("Login successful")

close()

}else{

alert("Invalid email or password")

}

}

return(

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">

<div className="bg-white text-black rounded-xl p-6 w-80">

<h2 className="text-xl font-bold mb-4 text-center">
{isLogin ? "Login" : "Register"}
</h2>

{!isLogin && (
<input
className="border p-2 w-full mb-3"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>
)}

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="border p-2 w-full mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-black text-white w-full py-2 rounded"
onClick={isLogin ? handleLogin : handleRegister}
>
{isLogin ? "Login" : "Register"}
</button>

<p
className="text-center mt-4 text-sm text-blue-600 cursor-pointer"
onClick={()=>setIsLogin(!isLogin)}
>
{isLogin
? "Don't have an account? Register"
: "Already have an account? Login"}
</p>

<button
className="mt-3 text-sm w-full"
onClick={close}
>
Close
</button>

</div>

</div>

)
}