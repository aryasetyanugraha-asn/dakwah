export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-emerald-950/50 text-slate-600 dark:text-slate-400 font-body-md text-xs uppercase tracking-widest w-full py-12 border-t border-slate-200 dark:border-emerald-900 transition-all opacity-100 hover:opacity-80 mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-500">© 2024 Al-Maktabah. Preserving the Sacred Tradition.</p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a className="text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200" href="#">Archives</a>
          <a className="text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200" href="#">Scholarly Ethics</a>
          <a className="text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200" href="#">Open Access</a>
          <a className="text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}