import { MessageCircle, Calendar, Wallet } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage:"radial-gradient(400px_200px_at_20%_10%,#F4C23E22,transparent),radial-gradient(300px_160px_at_80%_20%,#1D8C9022,transparent)"}} />
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#F3E7D8] text-[#1B1D20] px-4 py-2 text-sm mb-6 border border-black/5">
          <span className="font-medium">PaidAds.ae</span>
          <span className="opacity-60">Un-serious vibe. Dead-serious profit.</span>
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1B1D20] mb-4">
          Un-serious on the surface. <span className="text-[#1D8C90]">Dead-serious</span> about your ROAS.
        </h1>
        <p className="text-lg md:text-xl text-[#1B1D20]/80 max-w-3xl mx-auto">
          Performance marketing that speaks UAE—fast, transparent, WhatsApp-friendly. We joke. Your ROAS doesn’t.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a href="#audit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D8C90] text-white font-semibold shadow-sm hover:shadow-md hover:brightness-110 transition">
            <Calendar className="w-5 h-5" /> Get a 17‑minute audit
          </a>
          <a href="https://wa.me/" target="_blank" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F4C23E] text-[#1B1D20] font-semibold shadow-sm hover:shadow-md transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp us
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F3E7D8] text-[#1B1D20] font-semibold shadow-sm hover:shadow-md transition">
            <Wallet className="w-5 h-5" /> See transparent pricing
          </a>
        </div>
      </div>
    </section>
  );
}
