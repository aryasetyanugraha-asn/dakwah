
import { Link } from 'react-router-dom';

export default function HomeFeed() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Top App Bar Fallback */}
      <header className="lg:hidden bg-white/90 dark:bg-emerald-950/90 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-emerald-100 dark:border-emerald-900 shadow-sm flex justify-between items-center w-full px-8 py-4">
        <div className="flex items-center gap-4">
          <img alt="Scholar profile avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="close up of a professional portrait of a person with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBenjnpfJbrFchT4TgHuM_2pSeyLvBaATGcw8l9yrpIbycGZkM44zy0hc8TtR8QWRDbd3FWLf17QGE0tjDJU15RF4YMvE7nio6fCm9VikpPP5QryWnxQzS9JThqXId716NRwEJZ8KRptsMCiUP5DYkz-sosEdT4J2sliApuLWuX8jsMJ2oQnbWkRi9iqZZifCtB29hpaVxJwHgUNTlI4KT29uORwpBn_GVjacNIf86v2qI4vqvYkABb4lijDmRKG7RmYgACGdPK_3c" />
          <span className="text-2xl font-serif font-black tracking-tight text-emerald-900 dark:text-emerald-50">Al-Maktabah</span>
        </div>
        <div className="flex items-center gap-4 text-emerald-900 dark:text-emerald-50">
          <span className="material-symbols-outlined cursor-pointer active:opacity-70" data-icon="notifications">notifications</span>
          <span className="material-symbols-outlined cursor-pointer active:opacity-70" data-icon="bookmark">bookmark</span>
        </div>
      </header>
      {/* Side Navigation Bar (Desktop) */}
      <aside className="bg-white dark:bg-emerald-950 docked fixed left-0 top-0 h-full w-64 border-r border-r border-emerald-100 dark:border-emerald-900 shadow-none hidden lg:flex flex-col h-screen p-4 space-y-6 z-40">
        <div className="px-4 py-2 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden">
              <img alt="Organization Logo" className="w-full h-full object-cover" data-alt="abstract geometric shape in deep emerald green and gold" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdybNU2kz8bjHhkEuKGql1gfZlva6qyE6k9rvOZBXfzYbl3Cy4VXpdSgUArsVagxRCv67ukZW4ezIEcZWpdmygWXXGU1DgmyMWz-az879KatRgvUNnbQEXopmyGuhhpp6-hZMxNEjcT-16rI3O8zKOqBiYksqFb8YwgwNRvERInTE7rMDlUel_ggXXGyfCykK82NbY52W-FTn1dUNNJIrLugHkO57tYpG7vx5Pd7t5-ll6yicEHktB0Q9zCy5BL_-jJghzcJD93mY" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-emerald-900 dark:text-emerald-50">Al-Maktabah</h1>
              <p className="font-sans font-medium text-[11px] text-slate-500 uppercase tracking-wider">The Scholarly Feed</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 rounded-lg border-l-4 border-emerald-900 dark:border-emerald-400 scale-100 active:scale-95 transition-transform" to="/feed">
                <span className="material-symbols-outlined fill text-emerald-900 dark:text-emerald-400" data-icon="auto_stories" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                <span className="font-sans font-medium">Home Feed</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 scale-100 active:scale-95 transition-transform" to="/content">
                <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
                <span className="font-sans font-medium">The Library</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 scale-100 active:scale-95 transition-transform" to="/scholar">
                <span className="material-symbols-outlined" data-icon="verified">verified</span>
                <span className="font-sans font-medium">Verified Scholars</span>
              </Link>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 scale-100 active:scale-95 transition-transform" href="#">
                <span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
                <span className="font-sans font-medium">Reading List</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 scale-100 active:scale-95 transition-transform" href="#">
                <span className="material-symbols-outlined" data-icon="groups">groups</span>
                <span className="font-sans font-medium">Study Groups</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors shadow-sm flex justify-center items-center gap-2">
            <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
            Contribute Knowledge
          </button>
          <ul className="space-y-1 border-t border-emerald-100 dark:border-emerald-900 pt-4">
            <li>
              <Link className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-emerald-900/10 rounded-lg text-sm" to="/admin">
                <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                <span className="font-sans font-medium">Settings</span>
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
      {/* Main Content Canvas */}
      <main className="flex-1 lg:ml-64 w-full">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-8">
          {/* Feed Header */}
          <div className="flex justify-between items-end mb-4 border-b border-outline-variant/30 pb-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Latest Insights</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Curated knowledge from authenticated sources.</p>
            </div>
            <button className="text-primary hover:bg-surface-container px-3 py-2 rounded-lg transition-colors flex items-center gap-2 font-label-md text-label-md">
              <span className="material-symbols-outlined text-[20px]" data-icon="tune">tune</span>
              Filter
            </button>
          </div>
          {/* Card 1: Article / Essay */}
          <article className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 border border-outline-variant/20 shadow-[0_4px_20px_rgba(0,53,39,0.03)] hover:shadow-[0_8px_30px_rgba(0,53,39,0.06)] transition-shadow duration-300">
            <header className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img alt="Author avatar" className="w-12 h-12 rounded-full object-cover border border-surface-variant" data-alt="portrait of a middle aged man with a slight beard wearing a neutral collared shirt in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUfudwLuAQTR48RrZUTSdySyifeutbIkrALbtsHNVOCTTjM9beHxfqo9_Yq3INhF664UtOSt_A6yiFUhiIC_5P6IFZWmJbTxGpIK6fPgMlSVcePWKYet5x44_8EjADQEkBhErHBDKdz-Icc7zllqJ9opmUaCjppsANouCjD7y_mtdpEkcVW4xTQRbm4bV-UTtLdU83hp2o2iwM-j2dHHyq8NqUdbiSpMnjAivKwNYkkFqF-WUE2Xn_7iIbItXVKM6x3K3L8OKdz0s" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-label-md text-label-md text-on-surface">Dr. Hasan Al-Banna</span>
                    <span className="material-symbols-outlined fill text-[16px] text-primary" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">Professor of Islamic History • 2h ago</span>
                </div>
              </div>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
              </button>
            </header>
            <div className="mb-6">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3">The Evolution of Manuscript Preservation in Cordoba</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">During the height of the Andalusian period, the libraries of Cordoba were not merely repositories of books, but active centers of translation, commentary, and scientific advancement. The methods employed to preserve parchment and early paper variants offer profound insights into...</p>
            </div>
            <div className="rounded-lg overflow-hidden mb-6 h-[300px]">
              <img alt="Old manuscripts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="close up of ancient leather bound books and worn parchment pages stacked on a dark wooden table in a dimly lit library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLbuGZeeFxotgkDnE0mAdGnUNDJwPqxU64ELkCHmUA2uQ7N9J5sYajog51QnkJC7ntt8M4X-WP6gtGQHjIqbCGsO0c45I1m0LW15bOu-o0HXNgJSUSn1nkWGTgK8uPWYzUH1ec8rLS5bqhaqYH2tzysAYx2nRfwOmWWWT_UOxf9KBpgXY1Reizc8PTW7bN1-y_k6TPPb5G6kSn-E1URULk3BvaPPh19wbH0lqCME7H05m83A-T3vU6m-STcnlZUy_Vz5evxYDoBk" />
            </div>
            <footer className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
                  342
                </button>
                <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined" data-icon="chat_bubble_outline">chat_bubble_outline</span>
                  48
                </button>
                <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined" data-icon="share">share</span>
                  Share
                </button>
              </div>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="bookmark_border">bookmark_border</span>
              </button>
            </footer>
          </article>
          {/* Card 2: Quote / Advice (Typography Focus) */}
          <article className="bg-primary text-on-primary rounded-xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,53,39,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]" data-icon="format_quote">format_quote</span>
            </div>
            <header className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="history_edu">history_edu</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-label-md text-label-md">Classical Archives</span>
                  <span className="material-symbols-outlined fill text-[16px] text-primary-fixed-dim" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <span className="font-label-sm text-label-sm text-inverse-primary/80">Excerpt from Ihya Ulum al-Din</span>
              </div>
            </header>
            <blockquote className="font-display-lg text-[36px] sm:text-[42px] leading-[1.2] tracking-tight mb-8 relative z-10">
              "Knowledge without action is vanity, and action without knowledge is insanity."
            </blockquote>
            <footer className="flex items-center justify-between pt-6 border-t border-on-primary/20 relative z-10">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
                  1.2k
                </button>
                <button className="flex items-center gap-2 text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined" data-icon="share">share</span>
                  Share
                </button>
              </div>
              <button className="text-on-primary/80 hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="bookmark_border">bookmark_border</span>
              </button>
            </footer>
          </article>
          {/* Card 3: E-Book Recommendation */}
          <article className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_4px_20px_rgba(0,53,39,0.03)] hover:shadow-[0_8px_30px_rgba(0,53,39,0.06)] transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-[180px] shrink-0">
                <div className="aspect-[2/3] rounded-lg shadow-md overflow-hidden bg-surface-container">
                  <img alt="Book Cover" className="w-full h-full object-cover" data-alt="minimalist book cover design with geometric patterns in deep green and gold on a cream background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBMlVMto88e9aq8EdyKbmA7Fk9ez8ZWWL9kgTy4dI-MKhfkrN7HnoAFteGh_TSeJ95Z2MJitwwXg6wIn256xLb0UduRwPkl9t2Y9NB7LpzJHsgR8tmooQtTfYuD3RKpBTJjUkzS6UfyD77Hl3zfcv1JRwBUR1_pPnDd4XT8nkvIEsmAFV7qQxmV9lYGIe-QPu4JnoAqdmUjzUEDIYgnQgyPufhAllyTllP19R98oleHVCqR05BjMUEVNktS4aebdD4i4M4L8mumQk" />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <header className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded font-label-sm text-[10px] uppercase tracking-wider">New Addition</span>
                  <span className="font-label-sm text-label-sm text-secondary">Al-Maktabah Press</span>
                </header>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Principles of Islamic Jurisprudence</h3>
                <p className="font-label-md text-label-md text-primary mb-4">by Shaykh Muhammad Abu Zahra</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">A comprehensive modern translation of the foundational text detailing the methodology used by classical scholars to derive legal rulings from primary sources. Essential reading for students of law and ethics.</p>
                <div className="mt-auto flex items-center justify-between">
                  <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                    Read Now
                  </button>
                  <div className="flex items-center gap-4 text-secondary">
                    <button className="hover:text-primary transition-colors">
                      <span className="material-symbols-outlined" data-icon="library_add">library_add</span>
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <span className="material-symbols-outlined" data-icon="share">share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/* Loading Indicator */}
          <div className="py-8 flex justify-center">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
