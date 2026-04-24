import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import type { User, Content } from '../types';
import { getUsers, getContents } from '../services/firestore';

export function ScholarProfile() {
  const [scholar, setScholar] = useState<User | null>(null);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [users, allContents] = await Promise.all([getUsers(), getContents()]);
        const foundScholar = users.find(u => u.role === 'scholar');
        if (foundScholar) {
          setScholar(foundScholar);
          setContents(allContents.filter(c => c.authorId === foundScholar.id));
        }
      } catch (error) {
        console.error("Failed to fetch scholar data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface dark:bg-emerald-950 flex flex-col items-center justify-center">
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-primary/40 dark:bg-emerald-500/40 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-primary/60 dark:bg-emerald-500/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 rounded-full bg-primary dark:bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  if (!scholar) {
    return (
      <div className="min-h-screen bg-surface dark:bg-emerald-950 flex flex-col items-center justify-center">
        <h2 className="font-display-md text-on-surface dark:text-emerald-50">Scholar not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-emerald-950 flex flex-col md:flex-row">
      <Sidebar />
      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full relative pb-0 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center gap-4 p-4 border-b border-outline-variant/30 dark:border-emerald-800/50 bg-surface-container-lowest dark:bg-emerald-950/90 sticky top-0 z-50">
          <Link to="/" className="text-on-surface-variant dark:text-emerald-300">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <span className="font-headline-sm text-headline-sm flex-1 text-center dark:text-emerald-50">Scholar Profile</span>
          <button className="text-on-surface-variant dark:text-emerald-300">
            <span className="material-symbols-outlined text-[24px]">more_vert</span>
          </button>
        </header>
        {/* Profile Header Block */}
        <header className="pt-6 px-4 sm:px-8">
          {/* Profile Header Image / Gradient */}
          <div className="h-48 md:h-64 rounded-xl mb-16 relative overflow-visible shadow-sm bg-gradient-to-r from-primary-container via-surface-variant to-secondary-container dark:from-emerald-900 dark:via-emerald-800 dark:to-emerald-950">
            {/* Profile Avatar */}
            <div className="absolute -bottom-12 left-6 md:left-12">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-surface dark:border-emerald-950 overflow-hidden shadow-lg bg-surface-container dark:bg-emerald-900 flex items-center justify-center relative group cursor-pointer transition-transform hover:scale-105 duration-300">
                <img alt={scholar.name} className="w-full h-full object-cover" src={scholar.avatar || 'https://i.pravatar.cc/150'} />
              </div>
            </div>
            {/* Action Buttons */}
            <div className="absolute -bottom-6 right-6 md:right-12 flex items-center gap-3">
              <button className="bg-surface dark:bg-emerald-900 text-on-surface dark:text-emerald-50 w-12 h-12 rounded-full shadow-md hover:bg-surface-container-lowest dark:hover:bg-emerald-800 transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="share">share</span>
              </button>
              <button className="bg-primary dark:bg-emerald-600 text-on-primary dark:text-emerald-50 px-6 h-12 rounded-full shadow-md hover:bg-primary/90 dark:hover:bg-emerald-500 transition-colors font-label-lg text-label-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]" data-icon="person_add">person_add</span>
                Follow
              </button>
            </div>
          </div>
          {/* Scholar Info */}
          <div className="px-6 md:px-12 mb-10">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-display-md text-display-md text-on-surface dark:text-emerald-50">{scholar.name}</h1>
              {scholar.isVerified && <span className="material-symbols-outlined fill text-[20px] text-primary dark:text-emerald-400" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
            </div>
            <p className="font-label-lg text-label-lg text-secondary dark:text-emerald-300 mb-4">{scholar.role}</p>
          </div>
        </header>
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-8 pb-16">
          {/* Left Column: Recent Publications & Content */}
          <div className="col-span-1 lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-outline-variant/30 dark:border-emerald-800/50 pb-4">
              <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-emerald-50">Recent Works</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-secondary-container dark:bg-emerald-800 text-on-secondary-container dark:text-emerald-100 font-label-sm text-label-sm">All</button>
                <button className="px-3 py-1 rounded-full hover:bg-surface-container dark:hover:bg-emerald-900/50 font-label-sm text-label-sm text-on-surface-variant dark:text-emerald-300 transition-colors">Articles</button>
                <button className="px-3 py-1 rounded-full hover:bg-surface-container dark:hover:bg-emerald-900/50 font-label-sm text-label-sm text-on-surface-variant dark:text-emerald-300 transition-colors">E-Books</button>
              </div>
            </div>
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contents.map((content) => (
                <Link to="#" key={content.id} className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl ambient-shadow border border-outline-variant/20 dark:border-emerald-800/30 overflow-hidden flex flex-col hover:shadow-md transition-all hover:-translate-y-1 duration-300 group cursor-pointer block text-left">
                  {content.type === 'ebook' || content.type === 'article' ? (
                    <>
                      <div className="h-40 bg-surface-container dark:bg-emerald-950/50 relative overflow-hidden flex items-center justify-center">
                        <span className="material-symbols-outlined text-[64px] text-primary/30 dark:text-emerald-500/30" data-icon={content.type === 'ebook' ? 'menu_book' : 'article'}>{content.type === 'ebook' ? 'menu_book' : 'article'}</span>
                        <div className="absolute top-3 left-3 px-2 py-1 bg-surface/80 dark:bg-emerald-900/80 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider text-on-surface dark:text-emerald-50">{content.type}</div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h4 className="font-headline-md text-headline-md text-on-surface dark:text-emerald-50 mb-2 text-[18px] leading-snug group-hover:text-primary dark:group-hover:text-emerald-300 transition-colors">{content.title}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-emerald-100/80 mb-4 line-clamp-2">{content.body}</p>
                        <div className="mt-auto flex items-center justify-between text-secondary dark:text-emerald-400">
                          <span className="font-label-sm text-label-sm">{new Date(content.createdAt).toLocaleDateString()}</span>
                          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-outline dark:text-emerald-500/50 text-[18px]">format_quote</span>
                        <span className="font-label-sm text-label-sm text-outline dark:text-emerald-500/50 uppercase tracking-wider">Nasehat</span>
                      </div>
                      <h4 className="font-headline-md text-headline-md text-on-surface dark:text-emerald-50 mb-3 text-[20px] leading-snug group-hover:text-primary dark:group-hover:text-emerald-300 transition-colors">{content.title}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-emerald-100/80 mb-4 flex-1 line-clamp-3">"{content.body}"</p>
                      <div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 dark:border-emerald-800/30 pt-4 text-secondary dark:text-emerald-400">
                        <span className="font-label-sm text-label-sm">{new Date(content.createdAt).toLocaleDateString()}</span>
                        <span className="material-symbols-outlined text-primary dark:text-emerald-400 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
          {/* Right Column: Biography & Lineage */}
          <div className="col-span-1 lg:col-span-4 space-y-lg">
            {/* About Section */}
            <div className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl ambient-shadow border border-outline-variant/20 dark:border-emerald-800/30 p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-emerald-50 mb-4 flex items-center gap-2 border-b border-outline-variant/30 dark:border-emerald-800/50 pb-2">
                <span className="material-symbols-outlined text-primary dark:text-emerald-400">info</span> About
              </h3>
              <div className="font-body-md text-body-md text-on-surface-variant dark:text-emerald-100/80 space-y-4">
                <p>{scholar.bio}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a className="w-10 h-10 rounded-full bg-surface-container dark:bg-emerald-900/50 flex items-center justify-center text-on-surface dark:text-emerald-100 hover:bg-surface-variant dark:hover:bg-emerald-800 transition-colors" href="#" title="Institutional Profile">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-surface-container dark:bg-emerald-900/50 flex items-center justify-center text-on-surface dark:text-emerald-100 hover:bg-surface-variant dark:hover:bg-emerald-800 transition-colors" href="#" title="Personal Website">
                  <span className="material-symbols-outlined text-[20px]">language</span>
                </a>
              </div>
            </div>
            {/* Educational History */}
            <div className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl ambient-shadow border border-outline-variant/20 dark:border-emerald-800/30 p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-emerald-50 mb-6 flex items-center gap-2 border-b border-outline-variant/30 dark:border-emerald-800/50 pb-2">
                <span className="material-symbols-outlined text-primary dark:text-emerald-400">history_edu</span> Educational History
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/50 dark:before:via-emerald-700/50 before:to-transparent ml-2">
                {scholar.education?.map((edu, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 border-surface-container-lowest dark:border-emerald-950 ${index === 0 ? 'bg-primary dark:bg-emerald-500' : 'bg-surface-container-high dark:bg-emerald-800 border-outline-variant/50 dark:border-emerald-700'} shadow shrink-0 z-10 -ml-2.5`}></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4">
                      <span className={`font-label-sm text-label-sm ${index === 0 ? 'text-primary dark:text-emerald-400' : 'text-outline dark:text-emerald-500'} mb-1 block`}>{edu.year}</span>
                      <h4 className="font-label-md text-label-md text-on-surface dark:text-emerald-50 font-bold">{edu.degree}</h4>
                      <span className="font-body-md text-body-md text-on-surface-variant dark:text-emerald-100/80 text-sm block">{edu.institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Teachers & Masyayikh (Lineage) */}
            <div className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl ambient-shadow border border-outline-variant/20 dark:border-emerald-800/30 p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-emerald-50 mb-4 flex items-center gap-2 border-b border-outline-variant/30 dark:border-emerald-800/50 pb-2">
                <span className="material-symbols-outlined text-primary dark:text-emerald-400">family_history</span> Teachers
              </h3>
              <ul className="space-y-4">
                {scholar.teachers?.map((teacher, index) => (
                  <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container dark:hover:bg-emerald-900/50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-surface-variant dark:bg-emerald-800 overflow-hidden flex items-center justify-center text-outline dark:text-emerald-400">
                       <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface dark:text-emerald-50 leading-tight">{teacher.name}</h4>
                      <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-emerald-300">{teacher.relation}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <footer className="mt-auto bg-slate-50 dark:bg-emerald-950/50 border-t border-slate-200 dark:border-emerald-900 full-width py-12 flat no shadows"><div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6"><span className="font-sans text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">© 2024 Al-Maktabah. Preserving the Sacred Tradition.</span><div className="flex gap-6"><a className="font-sans text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200 transition-all opacity-100 hover:opacity-80" href="#">Archives</a><a className="font-sans text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200 transition-all opacity-100 hover:opacity-80" href="#">Scholarly Ethics</a><a className="font-sans text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200 transition-all opacity-100 hover:opacity-80" href="#">Open Access</a><a className="font-sans text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-emerald-800 dark:hover:text-emerald-200 underline decoration-emerald-200 transition-all opacity-100 hover:opacity-80" href="#">Contact</a></div></div></footer>
      </main>
    </div>
  );
}
