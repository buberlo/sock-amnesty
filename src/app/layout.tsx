import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sock Amnesty',
    template: '%s | Sock Amnesty',
  },
  description: 'A playful household laundry app for tracking missing socks, fugitive heat, and dryer chaos.',
};

const links = [
  { href: '/', label: 'Dashboard', emoji: '🧺' },
  { href: '/registry', label: 'Registry', emoji: '🧦' },
  { href: '/cases', label: 'Cases', emoji: '🕵️' },
  { href: '/reports', label: 'Reports', emoji: '📜' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-slate-800 antialiased">
        <div className="min-h-screen">
          <header className="sticky top-0 z-40 border-b border-amber-200/70 bg-amber-50/85 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-200 text-2xl shadow-sm">
                  🧦
                </span>
                <span>
                  <span className="block text-lg font-black tracking-tight text-slate-900">Sock Amnesty</span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Missing sock fugitives
                  </span>
                </span>
              </Link>
              <nav className="flex flex-wrap items-center gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white hover:text-amber-800"
                  >
                    <span className="mr-1">{link.emoji}</span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
          <footer className="border-t border-amber-200/70 bg-amber-50/70">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>🧺 Sock Amnesty — where every missing sock is a fugitive and every dryer is a suspect.</p>
              <p className="font-semibold text-amber-800">Bribe responsibly. Pair wisely.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}