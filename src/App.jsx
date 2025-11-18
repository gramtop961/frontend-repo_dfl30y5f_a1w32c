import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import OpenTheBooks from "./components/OpenTheBooks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function BadgeRow(){
  const tags = [
    "We joke. Your ROAS doesn’t.",
    "Habibi, let’s scale.",
    "Serious results. Zero corporate cringe.",
    "From karak to CAC: we measure everything.",
    "Clicks in, dirhams out.",
    "Un-serious vibe. Dead-serious profit.",
    "Your ads need gym. We’re the trainer.",
    "Meme it, beam it, bank it.",
  ];
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-3 flex-wrap justify-center px-6">
        {tags.map(t => <span key={t} className="text-xs md:text-sm px-3 py-2 rounded-full bg-[#F3E7D8] text-[#1B1D20]/80 border border-black/5">{t}</span>)}
      </div>
    </div>
  )
}

function Footer(){
  return (
    <footer className="border-t border-black/5 bg-[#F3E7D8] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#1B1D20]/70 text-sm">© {new Date().getFullYear()} PaidAds.ae — WhatsApp-friendly, meme-aware, ROI-obsessed.</div>
        <div className="flex gap-2">
          <a href="#audit" className="px-4 py-2 rounded-lg bg-[#1D8C90] text-white text-sm font-semibold">Book a 17‑minute Audit</a>
          <a href="#" className="px-4 py-2 rounded-lg bg-[#F4C23E] text-[#1B1D20] text-sm font-semibold">Send Us Your Worst Ad</a>
          <a href="https://wa.me/" className="px-4 py-2 rounded-lg bg-white text-[#1B1D20] text-sm font-semibold border border-black/5">WhatsApp a Media Plan</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#F3E7D8]">
      <Hero/>
      <BadgeRow/>
      <SocialProof/>
      <Services/>
      <OpenTheBooks/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App