import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">
          Hallo, {user?.email?.split('@')[0]} 👋
        </h1>
        <p className="text-slate-400">Willkommen bei GrowthFactory. Lass uns deinen Shop wachsen lassen.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Connect Shop Card */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-4">
            🔗
          </div>
          <h2 className="text-lg font-semibold mb-2">Shop verbinden</h2>
          <p className="text-slate-400 text-sm mb-4">
            Verbinde deinen Shopify Store um personalisierte Insights zu erhalten.
          </p>
          <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition">
            Shopify verbinden
          </button>
        </div>

        {/* Insights Card */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-2xl mb-4">
            💡
          </div>
          <h2 className="text-lg font-semibold mb-2">Wöchentliche Insights</h2>
          <p className="text-slate-400 text-sm mb-4">
            Verbinde zuerst deinen Shop um Insights zu erhalten.
          </p>
          <button disabled className="w-full py-2 bg-slate-700 text-slate-400 font-medium rounded-lg cursor-not-allowed">
            Keine Insights verfügbar
          </button>
        </div>

        {/* Getting Started Card */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-2xl mb-4">
            🚀
          </div>
          <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
          <p className="text-slate-400 text-sm mb-4">
            Lerne wie du das meiste aus GrowthFactory herausholst.
          </p>
          <button className="w-full py-2 border border-slate-600 hover:border-slate-500 text-white font-medium rounded-lg transition">
            Guide anschauen
          </button>
        </div>
      </div>

      {/* Empty State - No Shops */}
      <div className="bg-slate-800/50 rounded-xl border border-dashed border-slate-600 p-12 text-center">
        <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          🏪
        </div>
        <h2 className="text-xl font-semibold mb-2">Noch keine Shops verbunden</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Verbinde deinen ersten Shop um automatisch wöchentliche Wachstums-Empfehlungen zu erhalten.
        </p>
        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition">
          Ersten Shop verbinden →
        </button>
      </div>

      {/* Sample Insight Preview */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-slate-400">Vorschau:</span> So sehen deine Insights aus
        </h2>
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 opacity-75">
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-slate-700/30 p-4 rounded-xl">
              <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium shrink-0">DRINGEND</span>
              <div>
                <h3 className="font-medium mb-1 text-slate-300">38 Warenkörbe wurden abgebrochen (CHF 4'230 Potenzial)</h3>
                <p className="text-slate-500 text-sm">Aktiviere Abandoned Cart E-Mails. Geschätzter Mehrumsatz: CHF 850/Monat.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-700/30 p-4 rounded-xl">
              <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-medium shrink-0">QUICK WIN</span>
              <div>
                <h3 className="font-medium mb-1 text-slate-300">Posts um 14:00 performen 3x besser</h3>
                <p className="text-slate-500 text-sm">Verschiebe deine geplanten Social Media Posts auf diesen Zeitpunkt.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-slate-500 text-sm">
            Verbinde deinen Shop um echte Insights zu sehen →
          </div>
        </div>
      </div>
    </div>
  );
}
