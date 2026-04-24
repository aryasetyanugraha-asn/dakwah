import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import type { User, Content } from '../types';
import { getUsers, getContents } from '../services/firestore';

export function HomeFeed() {
  const [users, setUsers] = useState<User[]>([]);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [fetchedUsers, fetchedContents] = await Promise.all([
          getUsers(),
          getContents()
        ]);
        setUsers(fetchedUsers);
        setContents(fetchedContents);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getUserForContent = (authorId: string) => {
    return users.find(u => u.id === authorId);
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-emerald-950 flex flex-col md:flex-row">
      <Sidebar />
      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12">
        <header className="md:hidden flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]" data-icon="auto_stories">auto_stories</span>
            <h1 className="font-display-sm text-[24px] text-on-surface dark:text-emerald-50">Sanad</h1>
          </div>
          <button className="text-on-surface-variant dark:text-emerald-300">
            <span className="material-symbols-outlined text-[28px]" data-icon="menu">menu</span>
          </button>
        </header>
        <div className="space-y-8">
          {/* Feed Filter/Tabs */}
          <div className="flex items-center gap-4 border-b border-outline-variant/30 dark:border-emerald-800/50 pb-4 overflow-x-auto hide-scrollbar">
            <button className="px-4 py-2 font-label-lg text-label-lg text-primary dark:text-emerald-400 border-b-2 border-primary dark:border-emerald-400 whitespace-nowrap">For You</button>
            <button className="px-4 py-2 font-label-lg text-label-lg text-on-surface-variant dark:text-emerald-200/70 hover:text-on-surface dark:hover:text-emerald-50 whitespace-nowrap transition-colors">Following</button>
            <button className="px-4 py-2 font-label-lg text-label-lg text-on-surface-variant dark:text-emerald-200/70 hover:text-on-surface dark:hover:text-emerald-50 whitespace-nowrap transition-colors">Articles</button>
            <button className="px-4 py-2 font-label-lg text-label-lg text-on-surface-variant dark:text-emerald-200/70 hover:text-on-surface dark:hover:text-emerald-50 whitespace-nowrap transition-colors">E-Books</button>
            <div className="flex-1"></div>
            <button className="text-on-surface-variant dark:text-emerald-200/70 hover:text-on-surface dark:hover:text-emerald-50 flex items-center gap-2 font-label-md text-label-md transition-colors">
              <span className="material-symbols-outlined text-[20px]" data-icon="tune">tune</span>
              Filter
            </button>
          </div>

          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((skeletonId) => (
                <div key={skeletonId} className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl p-6 border border-outline-variant/20 dark:border-emerald-800/30 shadow-[0_4px_20px_rgba(0,53,39,0.03)] animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high dark:bg-emerald-800/50"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-surface-container-high dark:bg-emerald-800/50 rounded w-32"></div>
                      <div className="h-3 bg-surface-container-high dark:bg-emerald-800/50 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-6 bg-surface-container-high dark:bg-emerald-800/50 rounded w-3/4"></div>
                    <div className="h-4 bg-surface-container-high dark:bg-emerald-800/50 rounded w-full"></div>
                    <div className="h-4 bg-surface-container-high dark:bg-emerald-800/50 rounded w-full"></div>
                    <div className="h-4 bg-surface-container-high dark:bg-emerald-800/50 rounded w-2/3"></div>
                  </div>
                  <div className="h-[200px] bg-surface-container-high dark:bg-emerald-800/50 rounded-lg mb-4"></div>
                </div>
              ))}
            </div>
          ) : (
            contents.map((content) => {
              const user = getUserForContent(content.authorId);

              if (content.type === 'nasehat') {
                 return (
                   <article key={content.id} className="bg-primary dark:bg-emerald-800 text-on-primary dark:text-emerald-50 rounded-xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,53,39,0.15)] relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                     <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                       <span className="material-symbols-outlined text-[120px]" data-icon="format_quote">format_quote</span>
                     </div>
                     <header className="flex items-center gap-3 mb-8 relative z-10">
                       <div className="w-10 h-10 rounded-full bg-primary-fixed dark:bg-emerald-900/50 flex items-center justify-center overflow-hidden">
                         {user?.avatar ? <img src={user.avatar} alt="Author Avatar" className="w-full h-full object-cover" /> : <span className="material-symbols-outlined text-primary dark:text-emerald-300" data-icon="history_edu">history_edu</span>}
                       </div>
                       <div>
                         <div className="flex items-center gap-1">
                           <span className="font-label-md text-label-md">{user?.name || 'Unknown'}</span>
                           {user?.isVerified && <span className="material-symbols-outlined fill text-[16px] text-primary-fixed-dim dark:text-emerald-400" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                         </div>
                         <span className="font-label-sm text-label-sm text-inverse-primary/80 dark:text-emerald-200/80">{content.title}</span>
                       </div>
                     </header>
                     <blockquote className="font-display-lg text-[24px] sm:text-[32px] leading-[1.3] tracking-tight mb-8 relative z-10">
                       "{content.body}"
                     </blockquote>
                     <footer className="flex items-center justify-between pt-6 border-t border-on-primary/20 dark:border-emerald-700/50 relative z-10">
                       <div className="flex items-center gap-6">
                         <button className="flex items-center gap-2 text-on-primary/80 dark:text-emerald-100 hover:text-on-primary dark:hover:text-emerald-50 transition-colors font-label-md text-label-md">
                           <span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
                           {content.likesCount}
                         </button>
                         <button className="flex items-center gap-2 text-on-primary/80 dark:text-emerald-100 hover:text-on-primary dark:hover:text-emerald-50 transition-colors font-label-md text-label-md">
                           <span className="material-symbols-outlined" data-icon="share">share</span>
                           Share
                         </button>
                       </div>
                       <button className="text-on-primary/80 dark:text-emerald-100 hover:text-on-primary dark:hover:text-emerald-50 transition-colors">
                         <span className="material-symbols-outlined" data-icon="bookmark_border">bookmark_border</span>
                       </button>
                     </footer>
                   </article>
                 );
              }

              if (content.type === 'ebook') {
                return (
                  <article key={content.id} className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl p-6 border border-outline-variant/20 dark:border-emerald-800/30 shadow-[0_4px_20px_rgba(0,53,39,0.03)] hover:shadow-[0_8px_30px_rgba(0,53,39,0.06)] transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="sm:w-[180px] shrink-0">
                        <div className="aspect-[2/3] rounded-lg shadow-md overflow-hidden bg-surface-container dark:bg-emerald-950/50 flex items-center justify-center">
                           <span className="material-symbols-outlined text-[64px] text-primary/30 dark:text-emerald-500/30" data-icon="menu_book">menu_book</span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <header className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-secondary-container dark:bg-emerald-800/50 text-on-secondary-container dark:text-emerald-200 rounded font-label-sm text-[10px] uppercase tracking-wider">E-Book</span>
                          <span className="font-label-sm text-label-sm text-secondary dark:text-emerald-300">{new Date(content.createdAt).toLocaleDateString()}</span>
                        </header>
                        <h3 className="font-headline-md text-headline-md text-on-surface dark:text-emerald-50 mb-2">{content.title}</h3>
                        <p className="font-label-md text-label-md text-primary dark:text-emerald-400 mb-4">by {user?.name || 'Unknown'}</p>
                        <p className="font-body-md text-body-md text-on-surface-variant dark:text-emerald-100/80 mb-6 line-clamp-3">{content.body}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <button className="bg-primary dark:bg-emerald-700 text-on-primary dark:text-emerald-50 px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container dark:hover:bg-emerald-600 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                            Read Now
                          </button>
                          <div className="flex items-center gap-4 text-secondary dark:text-emerald-300">
                            <button className="hover:text-primary dark:hover:text-emerald-200 transition-colors">
                              <span className="material-symbols-outlined" data-icon="library_add">library_add</span>
                            </button>
                            <button className="hover:text-primary dark:hover:text-emerald-200 transition-colors">
                              <span className="material-symbols-outlined" data-icon="share">share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article key={content.id} className="bg-surface-container-lowest dark:bg-emerald-900/40 rounded-xl p-6 border border-outline-variant/20 dark:border-emerald-800/30 shadow-[0_4px_20px_rgba(0,53,39,0.03)] hover:shadow-[0_8px_30px_rgba(0,53,39,0.06)] transition-shadow duration-300">
                  <header className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img alt="Author Avatar" className="w-10 h-10 rounded-full object-cover border border-surface-variant dark:border-emerald-800" src={user?.avatar || 'https://i.pravatar.cc/150'} />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-label-md text-label-md text-on-surface dark:text-emerald-50">{user?.name || 'Unknown'}</span>
                          {user?.isVerified && <span className="material-symbols-outlined fill text-[16px] text-primary dark:text-emerald-400" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary dark:text-emerald-300">{user?.role || 'User'} • {new Date(content.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="text-secondary dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-200 transition-colors">
                      <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
                    </button>
                  </header>
                  <div className="mb-6">
                    <h3 className="font-headline-lg text-headline-lg text-on-surface dark:text-emerald-50 mb-3">{content.title}</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-emerald-100/80 leading-relaxed">{content.body}</p>
                  </div>
                  <footer className="flex items-center justify-between pt-4 border-t border-outline-variant/30 dark:border-emerald-800/30">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-secondary dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-200 transition-colors font-label-md text-label-md">
                        <span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
                        {content.likesCount}
                      </button>
                      <button className="flex items-center gap-2 text-secondary dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-200 transition-colors font-label-md text-label-md">
                        <span className="material-symbols-outlined" data-icon="chat_bubble_outline">chat_bubble_outline</span>
                        0
                      </button>
                      <button className="flex items-center gap-2 text-secondary dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-200 transition-colors font-label-md text-label-md">
                        <span className="material-symbols-outlined" data-icon="share">share</span>
                        Share
                      </button>
                    </div>
                    <button className="text-secondary dark:text-emerald-300 hover:text-primary dark:hover:text-emerald-200 transition-colors">
                      <span className="material-symbols-outlined" data-icon="bookmark_border">bookmark_border</span>
                    </button>
                  </footer>
                </article>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
