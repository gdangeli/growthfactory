'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/settings`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Link href="/" className="block text-center mb-8">
            <span className="text-2xl font-bold">
              <span className="text-emerald-400">⚡</span> GrowthFactory
            </span>
          </Link>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              ✉️
            </div>
            <h1 className="text-2xl font-bold mb-2">E-Mail gesendet</h1>
            <p className="text-slate-400 mb-6">
              Falls ein Konto mit <span className="text-white">{email}</span> existiert, erhältst du einen Link zum Zurücksetzen deines Passworts.
            </p>
            <Link 
              href="/login"
              className="inline-block text-emerald-400 hover:text-emerald-300 transition font-medium"
            >
              Zurück zum Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center mb-8">
          <span className="text-2xl font-bold">
            <span className="text-emerald-400">⚡</span> GrowthFactory
          </span>
        </Link>

        {/* Reset Card */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h1 className="text-2xl font-bold mb-2">Passwort zurücksetzen</h1>
          <p className="text-slate-400 mb-6">Gib deine E-Mail ein und wir senden dir einen Reset-Link.</p>

          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.ch"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-600/50 text-white font-semibold rounded-lg transition"
            >
              {loading ? 'Senden...' : 'Reset-Link senden'}
            </button>
          </form>
        </div>

        {/* Back to login */}
        <p className="text-center text-slate-400 mt-6">
          <Link href="/login" className="text-emerald-400 hover:text-emerald-300 transition font-medium">
            ← Zurück zum Login
          </Link>
        </p>
      </div>
    </div>
  );
}
