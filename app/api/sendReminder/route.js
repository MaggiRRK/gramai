import { NextResponse } from "next/server"
import twilio from "twilio"

const client = twilio(
process.env.TWILIO_ACCOUNT_SID,
process.env.TWILIO_AUTH_TOKEN
)

export async function POST(req) {

const { phone } = await req.json()

try {

await client.messages.create({

body: "🌾 GramAI Reminder: Don't forget to complete today's lesson today!",

from: process.env.TWILIO_PHONE_NUMBER,

to: phone

})

return NextResponse.json({ success: true })

} catch (error) {

return NextResponse.json({ success: false })

}

}