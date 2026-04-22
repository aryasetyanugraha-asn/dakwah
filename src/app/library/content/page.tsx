import { Footer } from "@/components/Footer";

export default function ContentDetail() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
      {/* Context / Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <a className="font-label-sm text-label-sm text-primary uppercase tracking-wider hover:underline underline-offset-4 decoration-primary-fixed" href="#">Theology &amp; Fiqh</a>
        <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Treatises</span>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-8 text-balance">The Epistemology of Certainty: A Modern Contextualization of Classical Texts</h1>
        <div className="flex items-center flex-wrap gap-y-4 gap-x-8 border-y border-outline-variant/30 py-4">
          <div className="flex items-center gap-3">
            <img alt="Author" className="w-12 h-12 rounded-full object-cover bg-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVMd-pZBIglExv1EGWyu0kzHdUiJKwRKBIU_Rqs6fmLP8WyVhoRyydFSmYvNECOs84rJos8BsvVcJJZWLPcghjJfTSioi8yIY3tw3yVCka7sJU0EmiP8FTUpampVM7lmpEX22LaYRSzp19gKaN6kWqlb3pRFhVQia5gKbVhLTpDkwpRaiTQsbHoqmC8gnZEqFa_oRvjaj0ZmjW_SuDH8kcX55uPhFYE2yAU95sCvX4AIf_i14q2ALLpks9vx2r5kVcCbcZSA_szA" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-label-md text-label-md text-on-surface">Dr. Hasan Al-Farsi</span>
                <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Senior Fellow, Institute of Tradition</span>
            </div>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Published</span>
              <span className="font-label-md text-label-md text-on-surface-variant mt-0.5">October 12, 2023</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Reading Time</span>
              <span className="font-label-md text-label-md text-on-surface-variant mt-0.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 18 min
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <figure className="mb-12 w-full rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,53,39,0.04)] border border-outline-variant/20 bg-surface-container">
        <img alt="Manuscript" className="w-full h-auto object-cover aspect-[2/1]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqnR86aTuZ3tlgpxXZ8bl5vgFXqq4fJOUxwrHzzdyBHKAPCUFTDQtQgJCiKn9nnE0hUCQa6Umgxe3-tmBaVBr267Qs28xLu3KZ37RrldbxjNta6rWwSsonNZoDRRgcIXbFNz9OYgz8VsdPKxxzEYagNXJ8WwJ7uQi1_j9jMzyrchSucTE3isZeFkabvgkL34TPRlROpgywMvBfip5LilOHgQJDEvoZHT9sIo5XSgNuKDEQjL34n8vi1YGtbPoMZLAirijmazXOF-8" />
        <figcaption className="px-4 py-3 bg-surface text-center font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
          Figure 1: Original folio from the 12th-century manuscript, held in the National Archives.
        </figcaption>
      </figure>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none text-on-surface-variant font-body-lg text-body-lg space-y-8">
        <p className="first-letter:text-5xl first-letter:font-headline-lg first-letter:text-primary first-letter:mr-1 first-letter:float-left">
          The pursuit of unshakeable foundational knowledge, often termed &apos;certainty&apos; (yaqin)apos;certainty&apos;certainty&apos; (yaqin)apos; (yaqin) in the classical tradition, remains one of the most pressing intellectual endeavors of our age. While contemporary paradigms often relegate certainty to the realm of the empirical, the classical scholars established a robust taxonomy that encompassed rational, empirical, and revealed epistemologies.
        </p>
        <p>
          By examining the meticulous structures laid out by early theologians, we uncover a framework that does not merely tolerate doubt but systematically dismantles it through a synthesis of intellectual rigor and spiritual refinement. This paper seeks to bridge the conceptual gap between these historical methodologies and modern philosophical inquiries.
        </p>

        {/* Pullquote */}
        <blockquote className="my-12 pl-6 sm:pl-8 border-l-4 border-primary bg-surface-container-low/50 py-6 pr-6 rounded-r-xl">
          <p className="font-headline-md text-headline-md text-on-surface italic m-0">
            &quot;Knowledge is not merely the accumulation of data, but the transformative illumination that settles the restless heart.&quot;
          </p>
        </blockquote>

        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-12 mb-6">The Three Tiers of Epistemic Access</h2>
        <p>
          Central to this discourse is the tripartite division of knowledge acquisition. The first tier, <em>Ilm al-Yaqin</em> (Knowledge of Certainty), corresponds to information gained through undeniable transmission or rigorous deductive reasoning. It is the theoretical bedrock upon which further intellectual edifices are built.
        </p>
        <p>
          The second tier bridges the theoretical and the experiential, requiring an active participation from the seeker that transcends mere academic study. It is here that the modern scholar must navigate the most treacherous waters, balancing critical analysis with the humility required to absorb traditional wisdom.
        </p>
      </article>

      {/* Action Area: Download / Resources */}
      <div className="mt-16 bg-surface-container rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-[0_4px_20px_rgba(0,53,39,0.04)] border border-outline-variant/20">
        <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
          <span className="material-symbols-outlined text-[32px]">menu_book</span>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Download the Complete Treatise</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Includes fully annotated Arabic source text, extensive footnotes, and a bibliography of secondary modern literature.</p>
        </div>
        <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">download</span>
            PDF (4.2 MB)
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-surface-container-highest text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 border border-outline-variant/30">
            <span className="material-symbols-outlined text-[20px]">book</span>
            EPUB Format
          </button>
        </div>
      </div>

      {/* Author Profile Summary */}
      <div className="mt-12 border-t border-outline-variant/30 pt-12">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <img alt="Author Profile" className="w-24 h-24 rounded-full object-cover shadow-sm bg-surface-container shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmeHWmWHXQydYH1KUQArU0Npx0JyOcisout9fhGb2n82jOMt5flr_BbLPZ4xE6HbgR_gusK_bT0h7VEw1pHCPHUBd0tSEURawhutXASYbwkvq0IHGNYWzOJvUOlTUmyBnYzEMGVO7vi7wzoTr60WdlusyBokMWPS7bxuAs3ut69-wVEZDykbi3jB6Liotj18vmjy1dsr_pZPzNjMfYVgQKfnq8KcaQBiE1fPt1w8mJ1kZ_AetsTS51bQSv0pj5tUd5kl4sgUO_JcQ" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-headline-md text-headline-md text-on-surface">Dr. Hasan Al-Farsi</h4>
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 max-w-2xl">
              Specialist in post-classical theology and legal theory. Author of several authoritative works on bridging traditional epistemologies with contemporary philosophical frameworks.
            </p>
            <button className="px-5 py-2 border border-primary text-primary rounded-full font-label-sm text-label-sm hover:bg-primary/5 transition-colors flex items-center gap-2 w-fit">
              <span className="material-symbols-outlined text-[16px]">add</span> Follow Author
            </button>
          </div>
        </div>
      </div>

      {/* Related Content (Bento Style) */}
      <section className="mt-20 mb-12">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-8 border-b border-outline-variant/30 pb-4">Further Reading in Theology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Related Card 1 */}
          <a className="group block bg-surface rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,53,39,0.04)] border border-outline-variant/15 hover:shadow-[0_8px_30px_rgba(0,53,39,0.08)] hover:border-primary/20 transition-all duration-300 flex flex-col h-full" href="#">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block px-3 py-1 bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm rounded-md tracking-wide">Journal Article</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_outward</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">The Metaphysics of Causality in the Ash&apos;ari Tradition</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-1">An exploration of occassionalism and its implications for modern scientific determinism.</p>
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-outline-variant/10">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[12px] font-bold">A</div>
              <span className="font-label-sm text-label-sm text-on-surface">Dr. Amina Rahman</span>
            </div>
          </a>

          {/* Related Card 2 */}
          <a className="group block bg-surface rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,53,39,0.04)] border border-outline-variant/15 hover:shadow-[0_8px_30px_rgba(0,53,39,0.08)] hover:border-primary/20 transition-all duration-300 flex flex-col h-full" href="#">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block px-3 py-1 bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm rounded-md tracking-wide">Audio Lecture</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">headphones</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">Introduction to the Creed of Tahawi</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2 flex-1">A foundational 12-part series covering the consensus of the early community on creedal matters.</p>
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-outline-variant/10">
              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                <img alt="Speaker" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgVcXTh-FPuxC9j8ZaavtzyfF4u7PxysMcWT6LXrSuld8CvrxU2crhL_C_vYPhXIFiX3VdXmbq634kwZqmLP8VRVQZ26UpRqH4qzPFpexWdaCMiXQ77WdWZYghG0UJqj_MWrdfXTRi2jrW0J4Bbm6fARQ8bSJvknf9uRQQfjbz5w7iBZcAdmBAz-obxU1cCyr-S5MZofbbd90aRCR_ViEM08kPZIns-HYemuEOxw5k-VPg4LG1BioXyqSDeQelI2k8mNDwqiSAdso" />
              </div>
              <span className="font-label-sm text-label-sm text-on-surface">Sh. Yahya Ibrahim</span>
              <span className="ml-auto font-label-sm text-label-sm text-outline flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span> 45m
              </span>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
