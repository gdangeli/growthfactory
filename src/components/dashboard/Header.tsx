'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

interface HeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Logo */}
        <Link href="/" className="lg:hidden text-xl font-bold">
          <span className="text-emerald-400">⚡</span> GrowthFactory
        </Link>

        {/* Spacer */}
        <div className="hidden lg:block" />

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg border border-slate-700 shadow-lg py-1 z-50">
              <div className="px-4 py-2 border-b border-slate-700">
                <p className="text-sm font-medium text-white truncate">{user.email}</p>
              </div>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                onClick={() => setUserMenuOpen(false)}
              >
                Einstellungen
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700"
              >
                Abmelden
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pt-4 border-t border-slate-700 space-y-1">
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            📊 Übersicht
          </Link>
          <Link
            href="/dashboard/shops"
            className="block px-4 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            🏪 Shops
          </Link>
          <Link
            href="/dashboard/insights"
            className="block px-4 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            💡 Insights
          </Link>
          <Link
            href="/dashboard/settings"
            className="block px-4 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            ⚙️ Einstellungen
          </Link>
        </nav>
      )}
    </header>
  );
}
