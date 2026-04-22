import { Footer } from "@/components/Footer";

export default function HomeFeed() {
  return (
    <main className="flex-1 w-full">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-8">
        {/* Feed Header */}
        <div className="flex justify-between items-end mb-4 border-b border-outline-variant/30 pb-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Latest Insights</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Curated knowledge from authenticated sources.</p>
          </div>
          <button className="text-primary hover:bg-surface-container px-3 py-2 rounded-lg transition-colors flex items-center gap-2 font-label-md text-label-md">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>tune</span>
            Filter
          </button>
        </div>

        {/* Card 1: Article / Essay */}
        <article className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 border border-outline-variant/20 shadow-[0_4px_20px_rgba(0,53,39,0.03)] hover:shadow-[0_8px_30px_rgba(0,53,39,0.06)] transition-shadow duration-300">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img alt="Author avatar" className="w-12 h-12 rounded-full object-cover border border-surface-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUfudwLuAQTR48RrZUTSdySyifeutbIkrALbtsHNVOCTTjM9beHxfqo9_Yq3INhF664UtOSt_A6yiFUhiIC_5P6IFZWmJbTxGpIK6fPgMlSVcePWKYet5x44_8EjADQEkBhErHBDKdz-Icc7zllqJ9opmUaCjppsANouCjD7y_mtdpEkcVW4xTQRbm4bV-UTtLdU83hp2o2iwM-j2dHHyq8NqUdbiSpMnjAivKwNYkkFqF-WUE2Xn_7iIbItXVKM6x3K3L8OKdz0s" />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-label-md text-label-md text-on-surface">Dr. Hasan Al-Banna</span>
                  <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary">Professor of Islamic History • 2h ago</span>
              </div>
            </div>
            <button className="text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </header>

          <div className="mb-6">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3">The Evolution of Manuscript Preservation in Cordoba</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">During the height of the Andalusian period, the libraries of Cordoba were not merely repositories of books, but active centers of translation, commentary, and scientific advancement. The methods employed to preserve parchment and early paper variants offer profound insights into...</p>
          </div>

          <div className="rounded-lg overflow-hidden mb-6 h-[300px]">
            <img alt="Old manuscripts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLbuGZeeFxotgkDnE0mAdGnUNDJwPqxU64ELkCHmUA2uQ7N9J5sYajog51QnkJC7ntt8M4X-WP6gtGQHjIqbCGsO0c45I1m0LW15bOu-o0HXNgJSUSn1nkWGTgK8uPWYzUH1ec8rLS5bqhaqYH2tzysAYx2nRfwOmWWWT_UOxf9KBpgXY1Reizc8PTW7bN1-y_k6TPPb5G6kSn-E1URULk3BvaPPh19wbH0lqCME7H05m83A-T3vU6m-STcnlZUy_Vz5evxYDoBk" />
          </div>

          <footer className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">favorite_border</span>
                342
              </button>
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">chat_bubble_outline</span>
                48
              </button>
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">share</span>
                Share
              </button>
            </div>
            <button className="text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">bookmark_border</span>
            </button>
          </footer>
        </article>

        {/* Card 2: Quote / Advice (Typography Focus) */}
        <article className="bg-primary text-on-primary rounded-xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,53,39,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">format_quote</span>
          </div>

          <header className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">history_edu</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-label-md text-label-md">Classical Archives</span>
                <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <span className="font-label-sm text-label-sm text-inverse-primary/80">Excerpt from Ihya Ulum al-Din</span>
            </div>
          </header>

          <blockquote className="font-display-lg text-[36px] sm:text-[42px] leading-[1.2] tracking-tight mb-8 relative z-10">
            &quot;Knowledge without action is vanity, and action without knowledge is insanity.&quot;
          </blockquote>

          <footer className="flex items-center justify-between pt-6 border-t border-on-primary/20 relative z-10">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">favorite_border</span>
                1.2k
              </button>
              <button className="flex items-center gap-2 text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">share</span>
                Share
              </button>
            </div>
            <button className="text-on-primary/80 hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">bookmark_border</span>
            </button>
          </footer>
        </article>

        {/* Card 3: E-Book Recommendation */}
        <article className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/20 shadow-[0_4px_20px_rgba(0,53,39,0.03)] hover:shadow-[0_8px_30px_rgba(0,53,39,0.06)] transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-[180px] shrink-0">
              <div className="aspect-[2/3] rounded-lg shadow-md overflow-hidden bg-surface-container">
                <img alt="Book Cover" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBMlVMto88e9aq8EdyKbmA7Fk9ez8ZWWL9kgTy4dI-MKhfkrN7HnoAFteGh_TSeJ95Z2MJitwwXg6wIn256xLb0UduRwPkl9t2Y9NB7LpzJHsgR8tmooQtTfYuD3RKpBTJjUkzS6UfyD77Hl3zfcv1JRwBUR1_pPnDd4XT8nkvIEsmAFV7qQxmV9lYGIe-QPu4JnoAqdmUjzUEDIYgnQgyPufhAllyTllP19R98oleHVCqR05BjMUEVNktS4aebdD4i4M4L8mumQk" />
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
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  Read Now
                </button>
                <div className="flex items-center gap-4 text-secondary">
                  <button className="hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">library_add</span>
                  </button>
                  <button className="hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
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
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
