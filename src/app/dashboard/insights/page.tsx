export default function InsightsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Insights</h1>
        <p className="text-slate-400">Deine wöchentlichen Wachstums-Empfehlungen</p>
      </div>

      {/* Empty State */}
      <div className="bg-slate-800/50 rounded-xl border border-dashed border-slate-600 p-12 text-center">
        <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          💡
        </div>
        <h2 className="text-xl font-semibold mb-2">Keine Insights verfügbar</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Verbinde zuerst deinen Shop um personalisierte Wachstums-Empfehlungen zu erhalten.
        </p>
        <a 
          href="/dashboard/shops"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition inline-block"
        >
          Shop verbinden →
        </a>
      </div>

      {/* Preview of what insights look like */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-slate-400">Vorschau:</span> Beispiel-Insights
        </h2>
        <div className="space-y-4 opacity-60">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-start gap-4">
              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium shrink-0">
                DRINGEND
              </span>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">38 Warenkörbe abgebrochen</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Diese Woche wurden Warenkörbe im Wert von CHF 4'230 nicht abgeschlossen. 
                  Das sind 23% mehr als letzte Woche.
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-emerald-400 mb-2">💡 Empfohlene Aktion:</p>
                  <p className="text-sm text-slate-300">
                    Aktiviere Abandoned Cart E-Mails in Shopify. Geschätzter Mehrumsatz: CHF 850/Monat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-start gap-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium shrink-0">
                SEO
              </span>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Ranking-Chance erkannt</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Dein Artikel "Wanderschuhe Test" rankt aktuell auf Position 12 für ein Keyword 
                  mit 2'400 monatlichen Suchen.
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-emerald-400 mb-2">💡 Empfohlene Aktion:</p>
                  <p className="text-sm text-slate-300">
                    Mit diesen 3 Optimierungen kommst du auf Seite 1: Title Tag anpassen, 
                    mehr interne Links, FAQ Section hinzufügen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-start gap-4">
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium shrink-0">
                QUICK WIN
              </span>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Optimaler Posting-Zeitpunkt</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Deine Instagram Posts um 14:00 erhalten 3x mehr Engagement als Posts zu anderen Zeiten.
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-emerald-400 mb-2">💡 Empfohlene Aktion:</p>
                  <p className="text-sm text-slate-300">
                    Plane alle zukünftigen Posts für 14:00 Uhr. Erwartete Reichweiten-Steigerung: +200%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">
          Diese Beispiele zeigen dir, was dich erwartet. Verbinde deinen Shop für echte Insights!
        </p>
      </div>
    </div>
  );
}
