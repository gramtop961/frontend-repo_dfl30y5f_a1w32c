export default function SocialProof(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        <p className="text-sm font-medium text-[#1B1D20]/70">Trusted by UAE brands from DIFC to Yas Island</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 opacity-70">
          {['Noon','Careem','Talabat','Namshi','Etisalat','Yas'].map(x=>
            <div key={x} className="h-10 rounded bg-[#F3E7D8] flex items-center justify-center text-[#1B1D20]/70 text-sm">{x}</div>
          )}
        </div>
      </div>
    </section>
  )
}
