"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SideNavBar() {
  const pathname = usePathname();

  const isLibrary = pathname.startsWith('/library');
  const isProfile = pathname.startsWith('/profile');
  const isHome = pathname === '/';
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <nav className="bg-white text-emerald-800 font-body-md text-sm font-medium h-screen w-64 border-r fixed left-0 top-0 border-r-slate-200 hidden lg:flex flex-col pt-4 pb-8 z-50">
        <div className="px-6 pb-6 mb-2 border-b border-surface-variant">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_library</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-emerald-900 font-headline-md text-headline-md">Dakwah Management</h1>
              <p className="text-on-surface-variant font-label-sm text-label-sm">Verified Scholar Portal</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-emerald-900 bg-emerald-50/50 border-r-4 border-emerald-700">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined">library_books</span>
            Content Library
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined">verified_user</span>
            Author Verification
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined">group</span>
            User Management
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined">analytics</span>
            Analytics
          </a>
        </div>
        <div className="mt-auto flex flex-col gap-1 border-t border-surface-variant pt-4">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined">help</span>
            Support
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </nav>
    );
  }

  return (
    <aside className="bg-white dark:bg-emerald-950 text-emerald-900 dark:text-emerald-50 font-body-md docked fixed left-0 top-0 h-full w-64 border-r border-emerald-100 dark:border-emerald-900 shadow-none hidden lg:flex flex-col p-4 space-y-6 z-40">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-2">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden">
           <img alt="Organization Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBkMVgeL8N36X-7nyIlbNJDgHPBGIUwFJb8PaHE8X9DBjn4brSGuk_efRzzxRArOf-vDILFOrE0wAKv879hH14SEydrE0nXWgSn7Wl-12--KNF8K0nZvGAhTNRFGd2LwiMM_MykQF0_Vdb_Siq9zDYjWeou1OYeJFWoHq7OIEl4XKWRCfsODaX1jX-Q4eAKP0Ah8nfup9-PT364hnca98_yqyoOFa1bMeMJ_wlPP5eNA3oqz7lHTKnCCjXacLvMnuFwN7V7WxFF20" />
        </div>
        <div>
          <h1 className="text-xl font-headline-md font-bold text-emerald-900 dark:text-emerald-50 leading-tight">Al-Maktabah</h1>
          <p className="font-label-sm text-label-sm text-slate-500">The Scholarly Feed</p>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 space-y-1 mt-6">
        <Link href="/" className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 scale-100 active:scale-95 group",
          isHome
            ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400 font-bold"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 hover:text-emerald-700"
        )}>
          <span className={cn("material-symbols-outlined transition-colors", isHome ? "" : "text-slate-400 group-hover:text-emerald-700")} style={isHome ? { fontVariationSettings: "'FILL' 1" } : {}}>auto_stories</span>
          <span className="font-label-md text-label-md">Home Feed</span>
        </Link>

        <Link href="/library/content" className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 scale-100 active:scale-95 group",
          isLibrary
            ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400 font-bold"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 hover:text-emerald-700"
        )}>
          <span className={cn("material-symbols-outlined transition-colors", isLibrary ? "" : "text-slate-400 group-hover:text-emerald-700")} style={isLibrary ? { fontVariationSettings: "'FILL' 1" } : {}}>menu_book</span>
          <span className="font-label-md text-label-md">The Library</span>
        </Link>

        <Link href="/profile" className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 scale-100 active:scale-95 group",
          isProfile
            ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400 font-bold"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 hover:text-emerald-700"
        )}>
          <span className={cn("material-symbols-outlined transition-colors", isProfile ? "" : "text-slate-400 group-hover:text-emerald-700")} style={isProfile ? { fontVariationSettings: "'FILL' 1" } : {}}>verified</span>
          <span className="font-label-md text-label-md">Verified Scholars</span>
        </Link>

        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg transition-all duration-200 scale-100 active:scale-95 group">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-emerald-700 transition-colors">bookmarks</span>
          <span className="font-label-md text-label-md">Reading List</span>
        </a>

        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg transition-all duration-200 scale-100 active:scale-95 group">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-emerald-700 transition-colors">groups</span>
          <span className="font-label-md text-label-md">Study Groups</span>
        </a>
      </nav>

      {/* CTA */}
      <div className="px-4 py-2 border-t border-emerald-100 dark:border-emerald-900 pt-4">
        <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-[0_4px_20px_rgba(0,53,39,0.1)] hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 scale-100 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-sm">edit_document</span>
          Contribute Knowledge
        </button>
      </div>

      {/* Footer Nav */}
      <div className="pt-2 space-y-1 border-t border-emerald-100 dark:border-emerald-900">
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg transition-all duration-200 scale-100 active:scale-95 group">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-emerald-700 transition-colors text-xl">settings</span>
          <span className="font-label-sm text-label-sm">Settings</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg transition-all duration-200 scale-100 active:scale-95 group">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-emerald-700 transition-colors text-xl">help</span>
          <span className="font-label-sm text-label-sm">Support</span>
        </a>
      </div>
    </aside>
  );
}