import { Footer } from "@/components/Footer";

export default function ScholarProfile() {
  return (
    <main className="flex-1 w-full flex flex-col min-h-screen">
      {/* Profile Header Section */}
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant/30 pt-16 pb-12 px-8 lg:px-margin-desktop relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-xl items-start relative z-10">
          {/* Avatar */}
          <div className="flex-shrink-0 relative group">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-surface-container-lowest shadow-lg overflow-hidden relative">
              <img alt="Profile Picture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjxVHoqEmGZGeFY3ZUi7SHdZ-96G3Qk2zfQKpUtX39HN33gatyzck-Dok8r6xzrQXk3OblO7PtNiADnFn9cTreWdyBvhi4TcqGu7eZSWC0X3pJR0z2-7BBLAG2eHy0fx7j_0uf2plutpf5umdSDs4kjYDl-1ZKKckuU5haO7Henbiu8Rfh0uQBdXjgcVtmQDGF3Kvxm1jW6iMy_KJ_hvk6oG72bCwZd7stAolbMRTPYfUgqGsLXhTpXLC3GomJl5y5N4xngs7t-qM" />
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-surface-container-lowest rounded-full p-1 shadow-sm border border-outline-variant/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified Scholar">verified</span>
            </div>
          </div>

          {/* Scholar Details */}
          <div className="flex-1 pt-4">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-headline-lg text-headline-lg text-on-surface m-0">Dr. Tariq Al-Husseini</h1>
              <span className="px-2 py-1 bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 border border-outline-variant/30">
                <span className="material-symbols-outlined text-[14px]">school</span> Classical Fiqh
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl leading-relaxed">
              Renowned scholar specializing in comparative jurisprudence and manuscript preservation. Currently serving as the Head of Research at the Global Institute of Islamic Sciences.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                Follow Scholar
              </button>
              <button className="border border-outline px-6 py-2.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">bookmark</span>
                Save Profile
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hidden lg:flex gap-8 pt-6 border-l border-outline-variant/30 pl-xl ml-auto self-stretch">
            <div className="flex flex-col">
              <span className="font-display-lg text-display-lg text-primary m-0">142</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Publications</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-lg text-display-lg text-primary m-0">18k</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-8 lg:px-margin-desktop py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Left Column: Written Works (Main Focus) */}
        <div className="col-span-1 lg:col-span-8 space-y-xl">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface m-0">Written Works &amp; Research</h2>
            <a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" href="#">
              View Full Archive <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Bento Grid for Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Featured Book Card */}
            <div className="col-span-1 md:col-span-2 bg-surface-container-lowest rounded-xl ambient-shadow border border-outline-variant/20 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary-fixed opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="w-full md:w-48 h-64 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden border border-outline-variant/30 relative">
                <img alt="Book Cover" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSc2rL3HxzILi6aiDnVkJtoFx001gxLK6Upr1SeNRsrHYjVIj9sw8C4-lMJnCKncSRMa8KTt4yA6dhl-X9Z1GiwiSheIy8tGrACkAHkvrai_kNmBKT5N6mIFOBZ-1RqUx5h2prxOI5noO50xBtgdDUk7i3BQNQD8T4Eq6oYtPdwDY4AmXj6wBe76iEscm6rb-zfic46W4k4QglPdmLg4ziKD0A-ODhAHFndkiz7oOgeIKQZPYWmzyLJ5QBfKZ8IJDyOm52uHxySw0" />
                <div className="absolute top-2 right-2 bg-surface-container-lowest/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-on-surface uppercase tracking-wider border border-outline-variant/50">Book</div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-2">Published 2022 • Dar al-Ma&apos;rifa</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">The Principles of Jurisprudence in the Modern Context</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">A comprehensive analysis bridging classical theoretical frameworks with contemporary legal challenges, offering a renewed perspective on methodology.</p>
                <div className="mt-auto flex items-center gap-4">
                  <button className="font-label-md text-label-md text-primary flex items-center gap-1 hover:underline">
                    <span className="material-symbols-outlined text-[18px]">menu_book</span> Read Excerpt
                  </button>
                  <span className="text-outline-variant">•</span>
                  <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> 4.2k Reads
                  </span>
                </div>
              </div>
            </div>

            {/* Article Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl ambient-shadow border border-outline-variant/20 p-6 flex flex-col hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-outline text-[18px]">article</span>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Research Paper</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px] leading-snug group-hover:text-primary transition-colors">Digital Preservation of Andalusian Manuscripts</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 text-sm">Examining the methodologies and technical challenges in digitizing fragile 12th-century texts.</p>
              <div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 pt-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Journal of History, 2023</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl ambient-shadow border border-outline-variant/20 p-6 flex flex-col hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-outline text-[18px]">campaign</span>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Audio Lecture</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3 text-[20px] leading-snug group-hover:text-primary transition-colors">Introduction to the Science of Hadith</h4>
              {/* Progress Indicator for Audio */}
              <div className="mb-4 mt-2">
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-on-surface-variant font-medium">15:20</span>
                  <span className="text-[10px] text-on-surface-variant font-medium">45:00</span>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 pt-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Series: Foundations</span>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Biography & Lineage */}
        <div className="col-span-1 lg:col-span-4 space-y-lg">
          {/* About Section */}
          <div className="bg-surface-container-lowest rounded-xl ambient-shadow border border-outline-variant/20 p-6">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant/30 pb-2">
              <span className="material-symbols-outlined text-primary">info</span> About
            </h3>
            <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>Dr. Tariq Al-Husseini completed his foundational studies under the tutelage of senior scholars in Damascus before pursuing formal academic degrees.</p>
              <p>His work bridges the gap between classical seminary education and modern academic research methodologies, making complex jurisprudential topics accessible to contemporary audiences.</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" href="#" title="Institutional Profile">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" href="#" title="Personal Website">
                <span className="material-symbols-outlined text-[20px]">language</span>
              </a>
            </div>
          </div>

          {/* Educational History */}
          <div className="bg-surface-container-lowest rounded-xl ambient-shadow border border-outline-variant/20 p-6">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-2">
              <span className="material-symbols-outlined text-primary">history_edu</span> Educational History
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/50 before:to-transparent ml-2">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-surface-container-lowest bg-primary shadow shrink-0 z-10 -ml-2.5"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4">
                  <span className="font-label-sm text-label-sm text-primary mb-1 block">2010 - 2014</span>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold">PhD in Comparative Fiqh</h4>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm block">Al-Azhar University</span>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-surface-container-lowest bg-surface-container-high border-outline-variant/50 shrink-0 z-10 -ml-2.5"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4">
                  <span className="font-label-sm text-label-sm text-outline mb-1 block">2005 - 2009</span>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold">MA in Islamic Studies</h4>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm block">University of Damascus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Teachers & Masyayikh (Lineage) */}
          <div className="bg-surface-container-lowest rounded-xl ambient-shadow border border-outline-variant/20 p-6">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant/30 pb-2">
              <span className="material-symbols-outlined text-primary">family_history</span> Teachers
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
                  <img alt="Teacher" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf-9lrjWvCyYzle1ZYzHeLmFPjjADi-Mubxi6nZvM22KT-MZHEwwtV-uJiO6lDLfj3DsarWjUyGbIq8BTwYtkbTN33XFRSGWcpJzKNNkLCw7oDsC7bIEthZiAo-DHDKUKmDTsZQrl1SCQAkbOgeVqlAcZmrwWeuaHWvXIm_MqhKDrqemwFSc0I_iqzUd-SZQhjsrPmagi1mAVaFIE2_QOKRf8NPtnQA49DJEaAfpxFSQyeEF6-o6W_rWSgX15VHzyMAyqsl3f4aio" />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface leading-tight">Shaykh Muhammad Al-Yaqoubi</h4>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Tazkiyah &amp; Hadith</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface leading-tight">Mufti Taqi Usmani</h4>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Islamic Finance (Ijazah)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
