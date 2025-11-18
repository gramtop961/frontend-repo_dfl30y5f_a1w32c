export default function Pricing(){
  const tiers = [
    {name:'Starter', price:'AED 4,999', includes:['17‑minute audit','Quick wins sprint','2 creatives','1 landing test','Tracking clean-up']},
    {name:'Scale', price:'AED 12,999', includes:['All Starter','Weekly Looms','4 creatives','2 landing tests','Cohort reporting']},
    {name:'Savage', price:'AED 24,999', includes:['All Scale','8 creatives','CRO roadmap','Full funnel automation','Founder hotline']},
  ];
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B1D20] mb-8">Sprint plans built for the UAE week</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t=> (
          <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-6 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1B1D20]">{t.name}</h3>
              <p className="text-3xl font-extrabold text-[#1D8C90] mt-2">{t.price}</p>
              <ul className="mt-4 space-y-2 text-[#1B1D20]/80 text-sm">
                {t.includes.map(i=> <li key={i}>• {i}</li>)}
              </ul>
            </div>
            <a href="#audit" className="mt-6 inline-block text-center w-full rounded-xl bg-[#F4C23E] text-[#1B1D20] font-semibold py-3">Pick {t.name}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
