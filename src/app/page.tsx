'use client';

import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setSubmitted(true);
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Fehler. Bitte versuche es nochmal.');
      }
    } catch {
      setMessage('Netzwerk-Fehler. Bitte versuche es nochmal.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm fixed w-full z-20 bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold">
            <span className="text-emerald-400">⚡</span> GrowthFactory
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            <a href="/login" className="text-slate-300 hover:text-white transition">Login</a>
            <a href="/signup" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition font-medium">
              Registrieren
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Coming Soon — Join the Waitlist
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dein <span className="text-emerald-400">KI Growth Manager</span>
            <br />für CHF 149/Monat
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Verbinde deinen Shop, erhalte wöchentlich konkrete Wachstums-Empfehlungen. 
            Wie ein Growth Manager — ohne die CHF 8'000/Monat.
          </p>

          {/* Waitlist Form */}
          <div id="waitlist" className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.ch"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-600/50 text-white font-semibold rounded-lg transition whitespace-nowrap"
                >
                  {loading ? '...' : 'Auf Warteliste →'}
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-4 rounded-lg">
                ✅ {message || 'Du bist auf der Warteliste! Wir melden uns bald.'}
              </div>
            )}
            {message && !submitted && (
              <div className="mt-3 text-red-400 text-sm">{message}</div>
            )}
            <p className="text-slate-500 text-sm mt-3">
              Kostenlos. Kein Spam. Früher Zugang garantiert.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kennst du das?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-4">😩</div>
              <h3 className="font-semibold text-lg mb-2">Keine Zeit für Marketing</h3>
              <p className="text-slate-400 text-sm">Du weisst, dass du "mehr Marketing" machen solltest, aber der Tag hat nur 24 Stunden.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-4">💸</div>
              <h3 className="font-semibold text-lg mb-2">Agenturen sind teuer</h3>
              <p className="text-slate-400 text-sm">Ein Growth Manager kostet CHF 8'000+/Monat. Eine Agentur mindestens CHF 2'000.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-4">🤷</div>
              <h3 className="font-semibold text-lg mb-2">Wo anfangen?</h3>
              <p className="text-slate-400 text-sm">SEO? Social Media? E-Mail? Es gibt tausend Möglichkeiten — aber welche bringt dir am meisten?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Die Lösung: <span className="text-emerald-400">GrowthFactory</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Verbinde deine Tools, erhalte jede Woche priorisierte, konkrete Aktionen die dein Business wachsen lassen.
          </p>
          
          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔗
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Verbinden</h3>
              <p className="text-slate-400 text-sm">Shopify, Google Analytics, Newsletter — verbinde deine Tools in 2 Minuten.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🤖
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Analysieren</h3>
              <p className="text-slate-400 text-sm">Unsere KI analysiert deine Daten und findet Wachstums-Chancen.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Umsetzen</h3>
              <p className="text-slate-400 text-sm">Erhalte wöchentlich 3-5 konkrete, priorisierte Aktionen — und setz sie um.</p>
            </div>
          </div>

          {/* Example Insight */}
          <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700">
            <div className="text-sm text-emerald-400 font-medium mb-4">📬 Beispiel: Deine wöchentlichen Insights</div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-slate-700/50 p-4 rounded-xl">
                <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium">DRINGEND</span>
                <div>
                  <h4 className="font-medium mb-1">38 Warenkörbe wurden abgebrochen (CHF 4'230 Potenzial)</h4>
                  <p className="text-slate-400 text-sm">Aktiviere Abandoned Cart E-Mails. Geschätzter Mehrumsatz: CHF 850/Monat.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-slate-700/50 p-4 rounded-xl">
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-medium">SEO</span>
                <div>
                  <h4 className="font-medium mb-1">Dein Artikel "Wanderschuhe Test" rankt auf Position 12</h4>
                  <p className="text-slate-400 text-sm">Mit diesen 3 Änderungen kommst du auf Seite 1: [Details anzeigen]</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-slate-700/50 p-4 rounded-xl">
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-medium">QUICK WIN</span>
                <div>
                  <h4 className="font-medium mb-1">Posts um 14:00 performen 3x besser</h4>
                  <p className="text-slate-400 text-sm">Verschiebe deine geplanten Social Media Posts auf diesen Zeitpunkt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Einfache Preise
          </h2>
          <p className="text-slate-400 text-center mb-12">
            Weniger als ein Mittagessen pro Tag für einen virtuellen Growth Manager.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-lg mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-1">CHF 49<span className="text-lg font-normal text-slate-400">/Mt</span></div>
              <p className="text-slate-400 text-sm mb-6">Für kleine Shops</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> 1 Shop verbinden</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Wöchentliche Insights</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> E-Mail Support</li>
              </ul>
            </div>
            
            {/* Pro */}
            <div className="bg-emerald-500 p-6 rounded-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                BELIEBT
              </div>
              <h3 className="font-semibold text-lg mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-1">CHF 149<span className="text-lg font-normal opacity-80">/Mt</span></div>
              <p className="opacity-80 text-sm mb-6">Für wachsende Shops</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span>✓</span> 3 Shops verbinden</li>
                <li className="flex items-center gap-2"><span>✓</span> Tägliche Insights</li>
                <li className="flex items-center gap-2"><span>✓</span> Alle Integrationen</li>
                <li className="flex items-center gap-2"><span>✓</span> Prioritäts-Support</li>
              </ul>
            </div>
            
            {/* Business */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-lg mb-2">Business</h3>
              <div className="text-3xl font-bold mb-1">CHF 349<span className="text-lg font-normal text-slate-400">/Mt</span></div>
              <p className="text-slate-400 text-sm mb-6">Für grössere Teams</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Unlimited Shops</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Custom Reports</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> API Zugang</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Dedicated Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für systematisches Wachstum?
          </h2>
          <p className="text-slate-400 mb-8">
            Trag dich auf die Warteliste ein und erhalte frühen Zugang + 30% Rabatt zum Launch.
          </p>
          <a 
            href="#waitlist" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
          >
            Auf Warteliste eintragen →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2026 GrowthFactory.ch — Made with 🤖 in Switzerland
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Impressum</a>
            <a href="#" className="hover:text-white transition">Datenschutz</a>
            <a href="mailto:support@growthfactory.ch" className="hover:text-white transition">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
