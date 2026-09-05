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
            I handed over the complete source code and project documentation to the school.
            For demonstration purposes, I deployed a demo version of the system on AWS Lightsail
            using dummy data, not the school's actual campus data. I also provided deployment
            support and remained involved during the handover process.
          </p>


          <div className="tag-row case__tags">
            {['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Express 5', 'Prisma 6', 'MySQL', 'Docker', 'Caddy', 'AWS Lightsail'].map(
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
            you can log in using one of the following demo accounts:

            <br /><br />
            <strong>Admin</strong>
            <br />
            Username: <strong>admin</strong>
            <br />
            Password: <strong>Demo@2026</strong>

            <br /><br />
            <strong>User</strong>
            <br />
            Username: <strong>11.21.142</strong>
            <br />
            Password: <strong>Demo@2026</strong>

            <br /><br />
            <strong>Keuangan</strong>
            <br />
            Username: <strong>keuangan</strong>
            <br />
            Password: <strong>Demo@2026</strong>

            <br /><br />
            <strong>Dosen</strong>
            <br />
            Username: <strong>6574487272</strong>
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
              so I built ZENIT, an e-commerce app implemented twice, once with REST and once with
              tRPC, on the same Next.js and Express.js base. Both versions then ran through
              identical k6 load tests across five scenarios.
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
              Shapiro-Wilk for normality, paired t-tests and Wilcoxon signed-rank where the data
              called for it, Cohen's d for effect size, and bootstrap confidence intervals to keep
              the small sample sizes honest.
            </p>

            <p>
              Both backends run on the same DigitalOcean VPS, managed with PM2 and sitting behind an
              Nginx reverse proxy, so the comparison runs under identical conditions. Redis caches
              product and category queries only, not sessions, so it doesn't distort the numbers.
              Both REST and tRPC authenticate with an httpOnly cookie, the tRPC context reads it the
              same way the REST middleware does, so auth isn't a variable between the two.
            </p>

            <div className="tag-row case__tags">
              {['Next.js 14', 'Express.js', 'tRPC v11', 'Prisma', 'PostgreSQL', 'Redis', 'PM2', 'Nginx', 'k6', 'Python'].map((t) => (
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
              This is a demo environment. You can log in with the admin account below,
              or register a new account / use the demo user account.
              <br />
              Admin: <strong>admin1@zenit.dev</strong>
              <br />
              Password: <strong>Password123!</strong>
              <br />
              <br />
              Demo User: <strong>aditya.latif9999@hotmail.com</strong>
              <br />
              Password: <strong>Password123!</strong>
            </p>
          </article>
      </div>
    </section>
  )
}