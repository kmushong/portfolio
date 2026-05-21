const featuredProjects = [
  {
    title: "Saver Application",
    meta: "SwiftUI · Xcode",
    summary:
      "A budgeting app built to track spending and help save 45% of each paycheck.",
  },
  {
    title: "Sol x Luna by Yaya",
    meta: "AWS · HTML · CSS · JavaScript · Node.js · MongoDB",
    summary:
      "A full-stack appointment booking site with user and admin portals for clients and schedules.",
  },
  {
    title: "Input/Output",
    meta: "Java",
    summary:
      "A calculator for the average speed of four highway sections, built to practice structured problem solving.",
  },
];

const skills = [
  "C++",
  "Java",
  "SwiftUI",
  "UIKit",
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "Xcode",
  "IntelliJ IDEA",
  "Eclipse",
];

const highlights = [
  "Hands-on builder who learns by shipping real work.",
  "Comfortable across mobile, web, and cloud-flavored projects.",
  "Balances design sense, technical execution, and initiative.",
];

export function PortfolioSite() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-[#f4f1ea] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,120,0.16),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(109,199,255,0.12),_transparent_28%),linear-gradient(180deg,_#0b0d12_0%,_#0c1018_56%,_#111622_100%)]" />
      <div className="absolute -top-20 right-[-80px] h-80 w-80 rounded-full bg-[#ffb35c]/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-80px] h-96 w-96 rounded-full bg-[#7cc7ff]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-8 py-7 sm:px-12 lg:px-16">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.38em] text-white/45">
              Portfolio / 2026
            </div>
            <div className="mt-2 text-lg font-semibold tracking-tight">
              Kelly Mushonga
            </div>
            <div className="mt-1 text-sm text-white/52">
              Washington, DC · (240) 234-3210 · kellynicolemushonga@gmail.com
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/55 md:flex">
            <a href="#projects" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <main className="flex-1">
          <section className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white/55">
                Creative technologist · UI/UX · full-stack
              </div>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-balance sm:text-7xl lg:text-[6.2rem]">
                I turn curiosity into impact through software, design, and cloud-backed projects.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
                I’m Kelly Mushonga, a computer science student building real-world skills in cloud architecture, UI/UX design, and full-stack development.
                I learn by doing, take initiative, and like work that makes the team better.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-[#f4f1ea] px-6 py-3 text-sm font-medium text-[#0c1018]"
                >
                  View projects
                </a>
                <a
                  href="mailto:kellynicolemushonga@gmail.com"
                  className="rounded-full border border-white/14 bg-white/5 px-6 py-3 text-sm font-medium text-white/85"
                >
                  Email Kelly
                </a>
                <a
                  href="https://www.linkedin.com/in/kelly-mushonga"
                  className="rounded-full border border-white/14 bg-white/5 px-6 py-3 text-sm font-medium text-white/85"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="grid gap-4 rounded-[28px] border border-white/12 bg-white/[0.05] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="rounded-[22px] border border-white/10 bg-[#101521] p-5">
                <div className="text-[11px] uppercase tracking-[0.32em] text-white/40">
                  Snapshot
                </div>
                <div className="mt-4 text-2xl font-semibold leading-tight">
                  Computer science student with a builder's mindset and a strong bias toward shipping.
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "May 2026", label: "B.S. target" },
                  { value: "3", label: "featured projects" },
                  { value: "1", label: "current role" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[18px] border border-white/10 bg-[#111725] px-4 py-4"
                  >
                    <div className="text-lg font-semibold tracking-tight">
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
            {highlights.map((item) => (
              <div key={item} className="text-sm leading-6 text-white/72">
                {item}
              </div>
            ))}
          </section>

          <section id="about" className="grid gap-5 py-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                About
              </div>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Objective: build, contribute, and keep learning.
                I care about hands-on work that blends product thinking, design awareness, and dependable execution.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/55">
                <div>
                  <span className="block text-white/80">Education</span>
                  University of Maryland, B.S. in Computer Science, anticipated May 2026
                </div>
                <div>
                  Montgomery College, A.A. in Information Systems, June 2022 to December 2024
                </div>
                <div>
                  <span className="block text-white/80">Coursework</span>
                  Computational Structures; Data Structures and Systems
                </div>
              </div>
            </div>

            <div id="projects" className="grid gap-4">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="group rounded-[28px] border border-white/10 bg-[#111724] p-6 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.3em] text-white/38">
                        0{index + 1}
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h2>
                      <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/38">
                        {project.meta}
                      </div>
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
            <div id="contact" className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
              <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                Experience
              </div>
              <div className="mt-5 text-2xl font-semibold tracking-tight">
                Personal Assistant & Digital Marketing Coordinator
              </div>
              <div className="mt-2 text-sm text-white/55">
                It’s Chic by Chantele · Jan 2024 to Present · Washington, DC
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/68">
                <li>Supported day-to-day operations and digital presence for a luxury boutique owner.</li>
                <li>Executed email campaigns using Mailchimp and Shopify Email to improve engagement and repeat sales.</li>
                <li>Maintained the Shopify storefront with design updates, HTML/CSS/JavaScript edits, and app integrations.</li>
                <li>Handled product uploads, pricing updates, and social content planning across Instagram and Facebook.</li>
              </ul>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                  Skills
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/74"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                  Contact
                </div>
                <div className="mt-5 text-3xl font-semibold tracking-tight">
                  Email, LinkedIn, and GitHub should be one click away.
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/74">
                  <a
                    href="mailto:kellynicolemushonga@gmail.com"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2"
                  >
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kelly-mushonga"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/kmushong"
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
