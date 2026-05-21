const projects = [
  {
    title: "Editorial portfolio",
    category: "Brand / Web",
    summary:
      "A story-driven landing page that pairs restrained layout with oversized type and strong section pacing.",
  },
  {
    title: "Product launch page",
    category: "Campaign / Conversion",
    summary:
      "A compact marketing site with a clear value proposition, proof points, and a direct call to action.",
  },
  {
    title: "Case study system",
    category: "Content / Structure",
    summary:
      "A reusable case study format that keeps work samples readable without feeling templated.",
  },
];

const metrics = [
  { value: "10+", label: "featured projects" },
  { value: "3s", label: "to understand the offer" },
  { value: "24/7", label: "available contact paths" },
];

export function PortfolioPreview() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-[#f4f1ea] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,120,0.16),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(109,199,255,0.12),_transparent_28%),linear-gradient(180deg,_#0b0d12_0%,_#0c1018_56%,_#111622_100%)]" />
      <div className="absolute -top-20 right-[-80px] h-80 w-80 rounded-full bg-[#ffb35c]/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-80px] h-96 w-96 rounded-full bg-[#7cc7ff]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-8 py-7 sm:px-12 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.38em] text-white/45">
              Portfolio / 2026
            </div>
            <div className="mt-2 text-lg font-semibold tracking-tight">
              Aidan Hart
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/55 md:flex">
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </header>

        <main className="flex-1">
          <section className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white/55">
                Selected work and contact
              </div>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-balance sm:text-7xl lg:text-[6.2rem]">
                A portfolio website that feels like an introduction, not a
                brochure.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
                This direction uses oversized typography, warm neutral surfaces,
                and a sharp section rhythm to make the work easy to scan while
                still feeling personal and memorable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#f4f1ea] px-6 py-3 text-sm font-medium text-[#0c1018]">
                  View work
                </button>
                <button className="rounded-full border border-white/14 bg-white/5 px-6 py-3 text-sm font-medium text-white/85">
                  Contact me
                </button>
              </div>
            </div>

            <aside className="grid gap-4 rounded-[28px] border border-white/12 bg-white/[0.05] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="rounded-[22px] border border-white/10 bg-[#101521] p-5">
                <div className="text-[11px] uppercase tracking-[0.32em] text-white/40">
                  Snapshot
                </div>
                <div className="mt-4 text-2xl font-semibold leading-tight">
                  Product-minded designer-developer building sites with point of
                  view.
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[18px] border border-white/10 bg-[#111725] px-4 py-4"
                  >
                    <div className="text-2xl font-semibold tracking-tight">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-[12px] leading-4 text-white/48">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="grid gap-5 border-y border-white/10 py-8 md:grid-cols-3">
            {[
              "Clear positioning",
              "Featured projects with context",
              "Direct contact paths",
            ].map((item) => (
              <div key={item} className="text-sm text-white/72">
                {item}
              </div>
            ))}
          </section>

          <section className="grid gap-5 py-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                About
              </div>
              <p className="mt-5 text-lg leading-8 text-white/70">
                The page should read like a strong personal introduction: who
                the owner is, what they do, what they care about, and how to
                start a conversation.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-white/55">
                <div>Based on real work, not placeholder fluff</div>
                <div>Strong visual hierarchy on mobile and desktop</div>
                <div>Short, direct copy with intentional spacing</div>
              </div>
            </div>

            <div className="grid gap-4">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group rounded-[28px] border border-white/10 bg-[#111724] p-6 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.3em] text-white/38">
                        0{index + 1} / {project.category}
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h2>
                    </div>
                    <div className="mt-1 h-11 w-11 rounded-full border border-white/10 bg-white/6" />
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
                    {project.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-5 pb-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
              <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                Contact
              </div>
              <div className="mt-5 text-3xl font-semibold tracking-tight">
                Email, LinkedIn, GitHub, and resume should all be one click
                away.
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/74">
                <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">
                  Email
                </span>
                <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">
                  LinkedIn
                </span>
                <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">
                  GitHub
                </span>
                <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">
                  Resume
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                Notes
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/62">
                <li>Use a single primary call to action.</li>
                <li>Keep project summaries short and concrete.</li>
                <li>Make the hero strong enough to stand alone.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
