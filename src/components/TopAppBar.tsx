"use client";
import { usePathname } from 'next/navigation';

export function TopAppBar() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <header className="bg-white/80 backdrop-blur-md text-emerald-900 font-headline-md font-semibold border-b border-slate-200/50 shadow-sm sticky top-0 z-40 flex justify-between items-center px-6 h-16 w-full">
        <div className="flex items-center lg:hidden">
          <button className="p-2 mr-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors duration-200 ease-in-out">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="text-xl font-bold text-emerald-900 font-headline-md">Dakwah Library Admin</span>
        </div>
        <div className="hidden lg:flex flex-1 max-w-md ml-4">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container focus:bg-white transition-colors duration-200 ease-in-out font-body-md text-body-md" placeholder="Search authors, content, users..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 text-slate-600 hover:bg-emerald-50 transition-colors duration-200 ease-in-out rounded-full relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="p-2 text-slate-600 hover:bg-emerald-50 transition-colors duration-200 ease-in-out rounded-full">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-primary-container ml-2 overflow-hidden border border-outline-variant">
            <img alt="Admin Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD44adyfBAvHXO5USVhXpnd6WvZ7H20cQ4W0QyniTNcee8AX1Q_hMueSk-ziWAiSt2HiEa3RSOSREgxqUOrE5ni0GJikL57ERqtcLmHLOA_719-wpSKah5ONjwfMDMQT-1CZN36JBOb9Ym9mv8Fq6vpaSYL_GDztX7m7TjlePm0o9RwC4jOapRvy9YweCGGZpJuW8YLoCEGfuKvDPPcQlTYiLIbfe3wcufkdtxP8AyAqF7rkL3CujbhwJUqqXsBTpvBbTapQ9fcZqU" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white/90 dark:bg-emerald-950/90 backdrop-blur-md text-emerald-900 dark:text-emerald-50 docked full-width top-0 sticky z-50 border-b border-emerald-100 dark:border-emerald-900 shadow-sm flex justify-between items-center w-full px-8 py-4 cursor-pointer active:opacity-70">
      {/* Brand Logo (Mobile only since desktop has sidebar) */}
      <div className="lg:hidden flex items-center gap-4">
        <img alt="Scholar profile avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBenjnpfJbrFchT4TgHuM_2pSeyLvBaATGcw8l9yrpIbycGZkM44zy0hc8TtR8QWRDbd3FWLf17QGE0tjDJU15RF4YMvE7nio6fCm9VikpPP5QryWnxQzS9JThqXId716NRwEJZ8KRptsMCiUP5DYkz-sosEdT4J2sliApuLWuX8jsMJ2oQnbWkRi9iqZZifCtB29hpaVxJwHgUNTlI4KT29uORwpBn_GVjacNIf86v2qI4vqvYkABb4lijDmRKG7RmYgACGdPK_3c" />
        <span className="text-2xl font-headline-md font-black tracking-tight text-emerald-900 dark:text-emerald-50">Al-Maktabah</span>
      </div>

      {/* Spacer for layout balance on desktop */}
      <div className="hidden lg:block w-1/3"></div>

      {/* Search Bar (on_right) */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-0 border-b border-slate-200 focus:border-emerald-700 focus:ring-0 rounded-t-md font-body-md text-sm transition-colors text-on-surface" placeholder="Search the archives..." type="text"/>
        </div>

        {/* Trailing Icon Actions */}
        <div className="flex items-center gap-4">
          <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="text-slate-500 dark:text-slate-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200">
            <span className="material-symbols-outlined">bookmark</span>
          </button>

          {/* Profile Avatar */}
          <div className="hidden lg:block w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-200 shrink-0 ml-2">
            <img alt="Scholar profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1tgvJTDq_s6kkx-ZvrnFB1y_DXeTpluxDJtbvaz5UEUNqLh61j-NW0Z0uG7RFpPmYc84h4TvmUkwl_YcYg15Vufb2FOtKZXp9AxYwGaWZznA6JowY0r-sVLLprltpHCbqMhtXXbH1AjmhhFZSkhnEWGFOaId8m6F1aFGRfJbDL4lfpA5C7BxdPR3LZSKmAVd4z1Hr3xCvRDD5Z3CPE8ITc3ey7ESqwQI3ENoJhT2Hx2fs0jS9_mvspRLvyCfISShHeb4BR_LK7vY" />
          </div>
        </div>
      </div>
    </header>
  );
}