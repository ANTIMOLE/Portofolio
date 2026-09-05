import { SIAKAD_LIVE_URL, SIAKAD_REPO_URL, ZENIT_CONDITIONS, ZENIT_LIVE_URL, ZENIT_REPO_URL, ZENIT_SCENARIOS } from '../data'

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section__head">
        <h2>Selected work</h2>
      </div>
      <p className="section__intro">
        Two projects I worked on in depth: a full academic system for a real school,
        and a final thesis experiment comparing REST and tRPC under load.
      </p>

      <div className="wide-max case-list">
        {/* Case 01 — SIAKAD */}
        <article className="case">
          <div className="case__head">
            <span className="case__index mono">Case 01</span>
            <h3>SIAKAD — Academic Information System</h3>
            <p className="case__subtitle">for STT Diakonos, a theological college in Banyumas</p>
          </div>

          <p>
            A web-based academic system that handles course registration (KRS), grades,
            attendance, and payments for four roles: admin, lecturer, student, and finance staff.
            The frontend uses Next.js (App Router) with TypeScript, Tailwind, and shadcn/ui.
            The backend is a separate Express.js service with Prisma and MySQL, structured as a monorepo.
          </p>
          <p>
            I packaged everything into a single Docker container (Next.js served from inside
            the Express process, together with MySQL and Caddy), tested it on AWS Lightsail,
            then moved it to the school’s VPS at{' '}
            <span className="mono">siakad.sttdiakonos.ac.id</span>.
            I handed the system over and stayed involved during deployment for support.
          </p>

          <div className="tag-row case__tags">
            {['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Express.js', 'Prisma', 'MySQL', 'Docker', 'Caddy', 'AWS Lightsail'].map(
              (t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ),
            )}
          </div>

          <div className="case__links">
            <a className="btn" href={SIAKAD_REPO_URL} target="_blank" rel="noreferrer">
              View code
            </a>
            <a className="btn" href={SIAKAD_LIVE_URL} target="_blank" rel="noreferrer">
              Visit live site
            </a>
          </div>
            <p className="case__note">
              This is an academic system, so the live link directs you to the sign-in page.
              Since this is a demo environment and not the actual website used by the school,
              you can log in using the following credentials:
              <br />
              Username: <strong>admin</strong>
              <br />
              Password: <strong>Demo@2026</strong>
            </p>
        </article>

        {/* Case 02 — ZENIT */}
        <article className="case">
          <div className="case__head">
            <span className="case__index mono">Case 02</span>
            <h3>ZENIT — REST API vs tRPC under load</h3>
            <p className="case__subtitle">Final thesis (Tugas Akhir)</p>
          </div>

          <p>
            REST and tRPC are often compared in theory. For my thesis I wanted actual numbers,
            so I built ZENIT — an e-commerce app implemented twice (once with REST, once with tRPC)
            on the same Next.js + Express.js base — then ran both through identical k6 load tests
            across five scenarios.
          </p>

          <div className="scenario-grid">
            {ZENIT_SCENARIOS.map((s) => (
              <div key={s.id} className="scenario-chip">
                <span className="mono scenario-chip__id">{s.id}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          <p>
            Each scenario was tested under four load conditions: step-up ({ZENIT_CONDITIONS[0].n}),
            stress ({ZENIT_CONDITIONS[1].n}), spike ({ZENIT_CONDITIONS[2].n}), and soak (
            {ZENIT_CONDITIONS[3].n}). I measured response time, P95/P99, throughput, error rate,
            CPU, and RAM usage. The results were processed with a Python pipeline using
            Shapiro-Wilk, paired t-tests / Wilcoxon signed-rank, Cohen’s d, and bootstrap
            confidence intervals.
          </p>

          <div className="tag-row case__tags">
            {['Next.js', 'Express.js', 'tRPC', 'PostgreSQL', 'Redis', 'k6', 'Python', 'pandas'].map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="case__links">
            <a className="btn" href={ZENIT_REPO_URL} target="_blank" rel="noreferrer">
              View code
            </a>
            <a className="btn" href={ZENIT_LIVE_URL} target="_blank" rel="noreferrer">
              Visit live site
            </a>
          </div>
          <p className="case__note">
            The full write-up (methodology, statistical tests, and results) is in the thesis document.
          </p>
        </article>
      </div>
    </section>
  )
}