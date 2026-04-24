import { motion } from "framer-motion";

import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-background text-on-background font-body-md text-body-md flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-white text-emerald-800 font-['Manrope'] text-sm font-medium h-screen w-64 border-r fixed left-0 top-0 border-r border-slate-200 hidden lg:flex flex-col h-full pt-4 pb-8 z-50">
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
          <a className="flex items-center gap-3 px-4 py-3 text-emerald-900 bg-emerald-50/50 border-r-4 border-emerald-700" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95" href="#">
            <span className="material-symbols-outlined">library_books</span>
            Content Library
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95" href="#">
            <span className="material-symbols-outlined">verified_user</span>
            Author Verification
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95" href="#">
            <span className="material-symbols-outlined">group</span>
            User Management
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95" href="#">
            <span className="material-symbols-outlined">analytics</span>
            Analytics
          </a>
        </div>
        <div className="mt-auto flex flex-col gap-1 border-t border-surface-variant pt-4">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95" href="#">
            <span className="material-symbols-outlined">help</span>
            Support
          </a>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-emerald-700 hover:bg-slate-50 transition-all active:scale-95" to="/feed">
            <span className="material-symbols-outlined">logout</span>
            Back to App
          </Link>
        </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col lg:ml-64 h-screen overflow-hidden bg-background">
        {/* TopAppBar */}
        <header className="bg-white/80 backdrop-blur-md text-emerald-900 font-['Newsreader'] font-semibold border-b border-slate-200/50 shadow-sm sticky top-0 z-40 flex justify-between items-center px-6 h-16 w-full">
          <div className="flex items-center lg:hidden">
            <button className="p-2 mr-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors duration-200 ease-in-out">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="text-xl font-bold text-emerald-900 font-headline-md text-headline-md">Dakwah Library Admin</span>
          </div>
          <div className="hidden lg:flex flex-1 max-w-md ml-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container focus:bg-white transition-colors duration-200 ease-in-out font-body-md text-body-md" placeholder="Search authors, content, users..." type="text" />
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
              <img alt="Admin Profile Avatar" className="w-full h-full object-cover" data-alt="professional portrait of a man in a modern office setting, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD44adyfBAvHXO5USVhXpnd6WvZ7H20cQ4W0QyniTNcee8AX1Q_hMueSk-ziWAiSt2HiEa3RSOSREgxqUOrE5ni0GJikL57ERqtcLmHLOA_719-wpSKah5ONjwfMDMQT-1CZN36JBOb9Ym9mv8Fq6vpaSYL_GDztX7m7TjlePm0o9RwC4jOapRvy9YweCGGZpJuW8YLoCEGfuKvDPPcQlTYiLIbfe3wcufkdtxP8AyAqF7rkL3CujbhwJUqqXsBTpvBbTapQ9fcZqU" />
            </div>
          </div>
        </header>
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-gutter md:p-md lg:p-lg">
          <div className="max-w-7xl mx-auto space-y-md lg:space-y-lg">
            {/* Page Header */}
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Dashboard Overview</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Welcome back. Here is the latest activity in the Dakwah Library.</p>
            </div>
            {/* Stats Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
              {/* Stat Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient shadow-ambient-hover transition-all duration-300 border border-slate-200/50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">history_edu</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 px-2 py-1 rounded-full">+12%</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Authors</p>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">1,248</h3>
                </div>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient shadow-ambient-hover transition-all duration-300 border border-slate-200/50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-sm">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 px-2 py-1 rounded-full">+8%</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">Published Content</p>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">14,592</h3>
                </div>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient shadow-ambient-hover transition-all duration-300 border border-slate-200/50 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-error-container/20 rounded-bl-full -mr-4 -mt-4 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-sm relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
                    <span className="material-symbols-outlined">pending_actions</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-2 py-1 rounded-full">Requires Action</span>
                </div>
                <div className="relative z-10">
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">Pending Verifications</p>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">34</h3>
                </div>
              </div>
              {/* Stat Card 4 */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient shadow-ambient-hover transition-all duration-300 border border-slate-200/50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-sm">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 px-2 py-1 rounded-full">+24%</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">Active Users</p>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">89.2k</h3>
                </div>
              </div>
            </div>
            {/* Complex Layout Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-md lg:gap-lg">
              {/* Left Column: Recent Submissions (Takes up 2 cols on XL) */}
              <div className="xl:col-span-2 space-y-md">
                <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-slate-200/50 overflow-hidden flex flex-col h-full">
                  <div className="p-md border-b border-surface-variant flex justify-between items-center bg-surface-bright">
                    <h3 className="font-headline-md text-headline-md text-on-surface">Recent Content Submissions</h3>
                    <button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">
                      View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          <th className="p-sm font-semibold">Title &amp; Author</th>
                          <th className="p-sm font-semibold">Type</th>
                          <th className="p-sm font-semibold">Date Submitted</th>
                          <th className="p-sm font-semibold">Status</th>
                          <th className="p-sm font-semibold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="font-body-md text-body-md text-on-surface divide-y divide-surface-variant">
                        <tr className="hover:bg-surface-container-lowest transition-colors">
                          <td className="p-sm">
                            <p className="font-semibold text-on-surface truncate max-w-xs">Principles of Modern Fiqh</p>
                            <p className="text-sm text-on-surface-variant truncate max-w-xs">Dr. Ahmad Zaki</p>
                          </td>
                          <td className="p-sm text-on-surface-variant">Article</td>
                          <td className="p-sm text-on-surface-variant">Oct 24, 2023</td>
                          <td className="p-sm">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container">
                              <span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container"></span> Pending
                            </span>
                          </td>
                          <td className="p-sm text-right">
                            <button className="p-1 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-lowest transition-colors">
                          <td className="p-sm">
                            <p className="font-semibold text-on-surface truncate max-w-xs">Tafsir Surah Al-Kahf: Part 3</p>
                            <p className="text-sm text-on-surface-variant truncate max-w-xs">Ustadh Mahmud Ali <span className="material-symbols-outlined text-[14px] text-primary align-middle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></p>
                          </td>
                          <td className="p-sm text-on-surface-variant">Audio</td>
                          <td className="p-sm text-on-surface-variant">Oct 23, 2023</td>
                          <td className="p-sm">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-primary-container/20 text-primary-container">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Published
                            </span>
                          </td>
                          <td className="p-sm text-right">
                            <button className="p-1 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-lowest transition-colors">
                          <td className="p-sm">
                            <p className="font-semibold text-on-surface truncate max-w-xs">Historical Context of the Crusades</p>
                            <p className="text-sm text-on-surface-variant truncate max-w-xs">Prof. Sarah Ibrahim</p>
                          </td>
                          <td className="p-sm text-on-surface-variant">Book Chapter</td>
                          <td className="p-sm text-on-surface-variant">Oct 21, 2023</td>
                          <td className="p-sm">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container">
                              <span className="w-1.5 h-1.5 rounded-full bg-on-error-container"></span> Rejected
                            </span>
                          </td>
                          <td className="p-sm text-right">
                            <button className="p-1 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-lowest transition-colors">
                          <td className="p-sm">
                            <p className="font-semibold text-on-surface truncate max-w-xs">Introduction to Hadith Terminology</p>
                            <p className="text-sm text-on-surface-variant truncate max-w-xs">Sheikh Tariq Jamil</p>
                          </td>
                          <td className="p-sm text-on-surface-variant">Video Series</td>
                          <td className="p-sm text-on-surface-variant">Oct 20, 2023</td>
                          <td className="p-sm">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container">
                              <span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container"></span> Pending
                            </span>
                          </td>
                          <td className="p-sm text-right">
                            <button className="p-1 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Right Column: Pending Verifications (Takes up 1 col on XL) */}
              <div className="xl:col-span-1">
                <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-slate-200/50 flex flex-col h-full">
                  <div className="p-md border-b border-surface-variant bg-surface-bright rounded-t-xl">
                    <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                      Pending Verifications
                      <span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-0.5 rounded-full">3</span>
                    </h3>
                    <p className="font-body-md text-sm text-on-surface-variant mt-1">Scholar profiles awaiting approval.</p>
                  </div>
                  <div className="flex-1 p-md space-y-md overflow-y-auto">
                    {/* Verification Item 1 */}
                    <div className="group flex gap-sm items-start p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant">
                      <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden shrink-0">
                        <img alt="Scholar Portrait" className="w-full h-full object-cover" data-alt="portrait of an older man with glasses and a beard in a library setting, warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwAZK7lCO1OKAsDHCW4UpXvZwUjy9q0n5YdDBRsEfxrYONypApjiajLVfARl-KoAwMVq6bQT9vE_HYDus5VJuQlXDTr7O5PpWf1Fi2L1furZTDEXYE5-fb_Cyse1av08dJebTfTesNshkFbaX49AdqudrTJab6lPd-xW1yDZKMOvN-e5FYB0bHLtpU3ZZQNvdMMg1k0LrjL4dEU1XGwdBTAixrfp2jDp6EISpwHFmFXde1HupcbnD6iLgMkbdjT7fiBf3NA-XHBS4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-md text-label-md text-on-surface truncate">Dr. Yusuf Al-Qari</h4>
                        <p className="text-sm text-on-surface-variant truncate">PhD Islamic Studies, Al-Azhar</p>
                        <div className="mt-2 flex gap-2">
                          <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-1.5 px-3 rounded-md hover:bg-primary/90 transition-colors">Review</button>
                        </div>
                      </div>
                    </div>
                    {/* Verification Item 2 */}
                    <div className="group flex gap-sm items-start p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant">
                      <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden shrink-0">
                        <img alt="Scholar Portrait" className="w-full h-full object-cover" data-alt="portrait of a woman wearing a modest hijab in an academic setting, soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpOTHYG5NFR_dA1DUYz4POiIE4aPJw0SRG8jQzJpseH_o_gMbysHtEvgtQcj0HK607XltSZ2iCnQLfF9zUjabvxp69ViE45N8Kl90mrJAnz6-rXNMg33huq4CingKe2ZNF00AhwsMGVb-k_4MiBneQeQxftXFVwt2uDWLg1oZEBcaX7QmQ5A6QAkZlFY1NCXcnLbMmseAzEQxTU8e6UOAMhOFrou30fwazj0yHIoBYvWyc1YzROP6SNriHecXmwKHPt4fy0lcugos" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-md text-label-md text-on-surface truncate">Prof. Amina Rahman</h4>
                        <p className="text-sm text-on-surface-variant truncate">Lecturer, Zaytuna College</p>
                        <div className="mt-2 flex gap-2">
                          <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-1.5 px-3 rounded-md hover:bg-primary/90 transition-colors">Review</button>
                        </div>
                      </div>
                    </div>
                    {/* Verification Item 3 */}
                    <div className="group flex gap-sm items-start p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant">
                      <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden shrink-0 flex items-center justify-center text-on-surface-variant font-headline-md">
                        FA
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-md text-label-md text-on-surface truncate">Faisal Ahmad</h4>
                        <p className="text-sm text-on-surface-variant truncate">Independent Researcher</p>
                        <div className="mt-2 flex gap-2">
                          <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-1.5 px-3 rounded-md hover:bg-primary/90 transition-colors">Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-sm border-t border-surface-variant text-center">
                    <a className="text-primary font-label-md text-label-md hover:underline" href="#">View All Requests</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
