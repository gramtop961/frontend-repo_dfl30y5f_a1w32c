import { useMemo, useState } from "react";

function kpiCalc(spend){
  // Benchmarks tailored for UAE ecomm/lead-gen hybrid
  const cpm = 18; // AED
  const ctr = 1.6/100;
  const cpc = (cpm/1000)/ctr; // AED per click
  const convRate = 2.2/100; // site CVR
  const aov = 220; // AED
  const roas = 3.8; // average

  const impressions = Math.round((spend / cpm) * 1000);
  const clicks = Math.round(impressions * ctr);
  const leads = Math.round(clicks * convRate);
  const revenue = Math.round(spend * roas);
  const cpa = leads ? Math.round(spend / leads) : 0;

  return { cpm, ctr, cpc, convRate, aov, roas, impressions, clicks, leads, revenue, cpa };
}

export default function OpenTheBooks(){
  const [spend, setSpend] = useState(10000);
  const metrics = useMemo(()=>kpiCalc(spend), [spend]);
  const fmt = (n)=> new Intl.NumberFormat('en-AE').format(n);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="books">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 rounded-2xl border border-black/5 bg-white p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#1B1D20]">Open the Books</h3>
            <span className="text-sm text-[#1B1D20]/60">Live demo dashboard</span>
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium text-[#1B1D20]">Projected spend (AED)</label>
            <input type="range" min={1000} max={100000} step={500} value={spend} onChange={e=>setSpend(parseInt(e.target.value))} className="w-full accent-[#1D8C90]"/>
            <div className="flex items-baseline gap-2 mt-2">
              <div className="text-3xl font-extrabold text-[#1D8C90]">AED {fmt(spend)}</div>
              <div className="text-xs text-[#1B1D20]/60">Drag to model leads/sales</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              {k:'Impressions', v:fmt(metrics.impressions)},
              {k:'Clicks', v:fmt(metrics.clicks)},
              {k:'Leads/Sales', v:fmt(metrics.leads)},
              {k:'Revenue', v:`AED ${fmt(metrics.revenue)}`},
              {k:'CPA', v:`AED ${fmt(metrics.cpa)}`},
              {k:'ROAS', v:`${metrics.roas}x`},
            ].map(x => (
              <div key={x.k} className="rounded-xl bg-[#F3E7D8] p-4">
                <div className="text-xs text-[#1B1D20]/60">{x.k}</div>
                <div className="text-lg font-bold text-[#1B1D20]">{x.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 rounded-2xl border border-black/5 bg-white p-6">
          <h4 className="text-lg font-bold text-[#1B1D20]">Show math</h4>
          <div className="mt-4 space-y-2 text-sm text-[#1B1D20]/80">
            <p>CPM = AED {metrics.cpm} • CTR = {(metrics.ctr*100).toFixed(1)}% • CPC ≈ AED {metrics.cpc.toFixed(2)} • CVR = {(metrics.convRate*100).toFixed(1)}% • AOV ≈ AED {metrics.aov} • ROAS ≈ {metrics.roas}x</p>
            <p>Impressions = Spend / CPM × 1000</p>
            <p>Clicks = Impressions × CTR</p>
            <p>Leads/Sales = Clicks × CVR</p>
            <p>Revenue = Spend × ROAS</p>
            <p className="text-[#D53A3A]">Note: Benchmarks vary by niche, Arabic/English split, and seasonality (Ramadan, National Day, etc.).</p>
          </div>
        </div>
      </div>
    </section>
  )
}
