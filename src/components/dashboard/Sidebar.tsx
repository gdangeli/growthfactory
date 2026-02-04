'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

interface SidebarProps {
  user: User;
}

const navigation = [
  { name: 'Übersicht', href: '/dashboard', icon: '📊' },
  { name: 'Shops', href: '/dashboard/shops', icon: '🏪' },
  { name: 'Insights', href: '/dashboard/insights', icon: '💡' },
  { name: 'Einstellungen', href: '/dashboard/settings', icon: '⚙️' },
];

export default function DashboardSidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-slate-800 border-r border-slate-700">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <Link href="/" className="text-xl font-bold">
          <span className="text-emerald-400">⚡</span> GrowthFactory
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/dashboard' && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
            {user.email?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user.email}</p>
            <p className="text-xs text-slate-400">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
