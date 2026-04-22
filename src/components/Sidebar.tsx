import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <aside className="bg-white dark:bg-emerald-950 docked fixed left-0 top-0 h-full w-64 border-r border-emerald-100 dark:border-emerald-900 shadow-none hidden lg:flex flex-col p-4 space-y-6 z-40">
      <div className="px-4 py-2 flex flex-col gap-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden">
            <img alt="Organization Logo" className="w-full h-full object-cover" data-alt="abstract geometric shape in deep emerald green and gold" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdybNU2kz8bjHhkEuKGql1gfZlva6qyE6k9rvOZBXfzYbl3Cy4VXpdSgUArsVagxRCv67ukZW4ezIEcZWpdmygWXXGU1DgmyMWz-az879KatRgvUNnbQEXopmyGuhhpp6-hZMxNEjcT-16rI3O8zKOqBiYksqFb8YwgwNRvERInTE7rMDlUel_ggXXGyfCykK82NbY52W-FTn1dUNNJIrLugHkO57tYpG7vx5Pd7t5-ll6yicEHktB0Q9zCy5BL_-jJghzcJD93mY" />
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold text-emerald-900 dark:text-emerald-50 leading-tight">Al-Maktabah</h1>
            <p className="font-sans font-medium text-[11px] text-slate-500 uppercase tracking-wider">The Scholarly Feed</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <Link
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 scale-100 active:scale-95 ${
                isActive('/feed')
                  ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10'
              }`}
              to="/feed"
            >
              <span className={`material-symbols-outlined ${isActive('/feed') ? 'fill' : ''}`} data-icon="auto_stories" style={isActive('/feed') ? { fontVariationSettings: "'FILL' 1" } : {}}>auto_stories</span>
              <span className={`font-sans ${isActive('/feed') ? 'font-bold' : 'font-medium'}`}>Home Feed</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 scale-100 active:scale-95 ${
                isActive('/content')
                  ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10'
              }`}
              to="/content"
            >
              <span className={`material-symbols-outlined ${isActive('/content') ? 'fill' : ''}`} data-icon="menu_book" style={isActive('/content') ? { fontVariationSettings: "'FILL' 1" } : {}}>menu_book</span>
              <span className={`font-sans ${isActive('/content') ? 'font-bold' : 'font-medium'}`}>The Library</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 scale-100 active:scale-95 ${
                isActive('/scholar')
                  ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10'
              }`}
              to="/scholar"
            >
              <span className={`material-symbols-outlined ${isActive('/scholar') ? 'fill' : ''}`} data-icon="verified" style={isActive('/scholar') ? { fontVariationSettings: "'FILL' 1" } : {}}>verified</span>
              <span className={`font-sans ${isActive('/scholar') ? 'font-bold' : 'font-medium'}`}>Verified Scholars</span>
            </Link>
          </li>
          <li>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg transition-all duration-200 scale-100 active:scale-95" href="#">
              <span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
              <span className="font-sans font-medium">Reading List</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg transition-all duration-200 scale-100 active:scale-95" href="#">
              <span className="material-symbols-outlined" data-icon="groups">groups</span>
              <span className="font-sans font-medium">Study Groups</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex flex-col gap-4">
        <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary/90 transition-colors shadow-sm flex justify-center items-center gap-2">
          <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
          Contribute Knowledge
        </button>
        <ul className="space-y-1 border-t border-emerald-100 dark:border-emerald-900 pt-4">
          <li>
            <Link
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive('/admin')
                  ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 border-l-4 border-emerald-900 dark:border-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10'
              }`}
              to="/admin"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
              <span className={`font-sans ${isActive('/admin') ? 'font-bold' : 'font-medium'}`}>Settings</span>
            </Link>
          </li>
          <li>
            <a className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg text-sm" href="#">
              <span className="material-symbols-outlined text-[20px]" data-icon="help">help</span>
              <span className="font-sans font-medium">Support</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
