import { Search, Megaphone, MonitorPlay, MapPinned, LineChart, FlaskConical, FileSpreadsheet, ShoppingCart, Mail } from "lucide-react";

const services = [
  { icon: Search, name: "Sheikh Zayed Search", one: "Own the intent highway.", two: "Ruthless negatives, branded to conquest." },
  { icon: Megaphone, name: "Majlis Media", one: "Thumb-stopping creative.", two: "Meta/TikTok/Snap — AR/EN variations." },
  { icon: MonitorPlay, name: "Falcon Reach", one: "Scale top-of-funnel.", two: "Smart frequency, UAE geo nuance." },
  { icon: MapPinned, name: "Dubai Mall Detours", one: "CRO & landers.", two: "We optimize the path so shoppers don’t wander." },
  { icon: LineChart, name: "Dirham Detective", one: "Analytics & tracking.", two: "GA4 + server-side + attribution sanity." },
  { icon: FlaskConical, name: "Meme Lab", one: "UGC + hooks.", two: "Arabic subtitles, trend-jacks that last." },
  { icon: FileSpreadsheet, name: "DIFC Pipeline", one: "B2B lead gen.", two: "High-intent forms + WhatsApp automations." },
  { icon: ShoppingCart, name: "Souq Sync", one: "Ecom feeds.", two: "Feed hygiene, price tests, LTV audiences." },
  { icon: Mail, name: "Karak Drips", one: "Lifecycle flows.", two: "Email/SMS that sells while you sleep." },
];

export default function Services(){
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B1D20] mb-8">What we do (with UAE flavor)</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({icon:Icon, name, one, two}) => (
          <div key={name} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded-xl bg-[#F3E7D8]"><Icon className="w-5 h-5 text-[#1D8C90]"/></span>
              <h3 className="font-semibold text-[#1B1D20]">{name}</h3>
            </div>
            <p className="text-sm text-[#1B1D20]/80">{one} {two}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
