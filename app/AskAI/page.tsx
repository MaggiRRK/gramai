import VoiceInput from "@/components/VoiceInput";
import Navbar from "../../components/navbar"

export default function Home() {
  return (
    <>
        <Navbar />
    <main className="p-10">
      <h1 className="text-4xl font-bold text-center">
        Ask Questions to AI
      </h1>
       <p className="mt-4 text-center">
        Click the button below and ask any question to AI using your voice!
      </p>
      <VoiceInput />
    </main>
    </>
  );
}