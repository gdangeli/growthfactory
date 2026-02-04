'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Password change
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwörter stimmen nicht überein' });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Passwort muss mindestens 6 Zeichen lang sein' });
      return;
    }

    setSaving(true);
    setMessage({ type: '', text: '' });

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Passwort erfolgreich geändert' });
      setNewPassword('');
      setConfirmPassword('');
    }

    setSaving(false);
  };

  const handleDeleteAccount = async () => {
    if (!confirm('Bist du sicher, dass du dein Konto löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      return;
    }

    // For now, just log out - actual account deletion would need admin API
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-700 rounded w-48 mb-8" />
          <div className="h-64 bg-slate-800 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">Einstellungen</h1>

      {/* Account Info */}
      <section className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Konto</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">E-Mail</label>
            <div className="px-4 py-3 bg-slate-700/50 rounded-lg text-slate-300">
              {user?.email}
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Konto erstellt</label>
            <div className="px-4 py-3 bg-slate-700/50 rounded-lg text-slate-300">
              {user?.created_at ? new Date(user.created_at).toLocaleDateString('de-CH', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              }) : '-'}
            </div>
          </div>
        </div>
      </section>

      {/* Change Password */}
      <section className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Passwort ändern</h2>
        
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm text-slate-400 mb-2">
              Neues Passwort
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-slate-400 mb-2">
              Passwort bestätigen
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          {message.text && (
            <div className={`px-4 py-3 rounded-lg text-sm ${
              message.type === 'error' 
                ? 'bg-red-500/10 border border-red-500/20 text-red-400' 
                : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
            }`}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={saving || !newPassword}
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 disabled:text-slate-400 text-white font-medium rounded-lg transition"
          >
            {saving ? 'Speichern...' : 'Passwort ändern'}
          </button>
        </form>
      </section>

      {/* Subscription */}
      <section className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Abo</h2>
        
        <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
          <div>
            <p className="font-medium">Free Plan</p>
            <p className="text-sm text-slate-400">Begrenzter Zugang</p>
          </div>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition">
            Upgrade
          </button>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="bg-slate-800 rounded-xl border border-red-500/20 p-6">
        <h2 className="text-lg font-semibold mb-4 text-red-400">Gefahrenzone</h2>
        
        <p className="text-slate-400 text-sm mb-4">
          Das Löschen deines Kontos ist permanent und kann nicht rückgängig gemacht werden.
        </p>
        
        <button
          onClick={handleDeleteAccount}
          className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium rounded-lg transition border border-red-500/20"
        >
          Konto löschen
        </button>
      </section>
    </div>
  );
}
