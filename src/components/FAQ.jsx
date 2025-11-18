export default function FAQ(){
  const faqs = [
    {q:'Do you speak Arabic?', a:'Yes. Bilingual-first. We test AR/EN variations and respect cultural nuance.'},
    {q:'Do memes convert?', a:'Shockingly, yes—when paired with rigorous testing, clear offers, and fast landers.'},
    {q:'Do you do WhatsApp?', a:'Absolutely. From ad-to-WhatsApp flows to automation and SLAs.'},
  ];
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B1D20] mb-8">FAQ</h2>
      <div className="grid gap-4">
        {faqs.map(({q,a}) => (
          <details key={q} className="rounded-xl border border-black/5 bg-white p-4">
            <summary className="font-semibold cursor-pointer text-[#1B1D20]">{q}</summary>
            <p className="mt-2 text-[#1B1D20]/80">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
