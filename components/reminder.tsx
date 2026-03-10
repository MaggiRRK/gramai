"use client"

import { useState } from "react"

export default function Reminder() {

const [phone,setPhone] = useState("")
const [status,setStatus] = useState("")

const sendReminder = async () => {

const res = await fetch("/api/sendReminder",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({phone})

})

const data = await res.json()

if(data.success){
setStatus("Reminder SMS sent successfully 📩")
}else{
setStatus("Failed to send SMS")
}

}

return(

<div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center mt-10">

<h2 className="text-xl font-bold mb-4">
📱 Daily Learning Reminder
</h2>

<p className="mb-4">
Enter your phone number to receive daily SMS reminders.
</p>

<input
type="text"
placeholder="+91XXXXXXXXXX"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="text-black px-3 py-2 rounded mr-3"
/>

<button
onClick={sendReminder}
className="bg-green-600 px-4 py-2 rounded"
>
Enable Reminder
</button>

<p className="mt-4">{status}</p>

</div>

)

}