export default function ShopsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Shops</h1>
          <p className="text-slate-400">Verwalte deine verbundenen Shops</p>
        </div>
        <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition">
          + Shop hinzufügen
        </button>
      </div>

      {/* Empty State */}
      <div className="bg-slate-800/50 rounded-xl border border-dashed border-slate-600 p-12 text-center">
        <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          🏪
        </div>
        <h2 className="text-xl font-semibold mb-2">Keine Shops verbunden</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Verbinde deinen Shopify Store um automatisch Insights zu deinem E-Commerce Business zu erhalten.
        </p>
        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition inline-flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.34 3.27l-.79 5.31h3.26L19 3.27h-3.66zm-5.72 0l-.5 3.53c-.07.49.32.94.82.94h3.77l.5-3.53c.07-.49-.32-.94-.82-.94h-3.77zm-3.92 0l-1.19 8.56c-.1.71.45 1.35 1.17 1.35h1.34l.79-5.91h3.45l-.5 3.53c-.07.49.32.94.82.94h3.77l.5-3.53c.07-.49-.32-.94-.82-.94h-3.45l.79-5.31h3.66l1.19 8.56c.1.71-.45 1.35-1.17 1.35H3.83c-.72 0-1.27-.64-1.17-1.35L3.85 3.27H5.7z"/>
          </svg>
          Shopify verbinden
        </button>
      </div>

      {/* Supported Platforms */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Unterstützte Plattformen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#96BF48]/10 rounded-lg flex items-center justify-center text-2xl">
              🛒
            </div>
            <div>
              <p className="font-medium">Shopify</p>
              <p className="text-sm text-emerald-400">Verfügbar</p>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex items-center gap-4 opacity-50">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl">
              🛍️
            </div>
            <div>
              <p className="font-medium">WooCommerce</p>
              <p className="text-sm text-slate-400">Coming Soon</p>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex items-center gap-4 opacity-50">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl">
              📊
            </div>
            <div>
              <p className="font-medium">Google Analytics</p>
              <p className="text-sm text-slate-400">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
