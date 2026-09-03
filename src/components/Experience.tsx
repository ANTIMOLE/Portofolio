import { EDUCATION, EXPERIENCE, ORG_EXPERIENCE } from '../data'

function TimelineEntry({
  org,
  place,
  role,
  period,
  bullets,
}: {
  org: string
  place: string
  role: string
  period: string
  bullets: string[]
}) {
  return (
    <article className="entry">
      <div className="entry__head">
        <div>
          <h3 className="entry__org">{org}</h3>
          <p className="entry__role">{role}</p>
        </div>
        <p className="entry__period mono">{period}</p>
      </div>
      <p className="entry__place">{place}</p>
      <ul className="entry__list">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <h2>Experience</h2>
      </div>

      <div className="wide-max entry-list">
        <TimelineEntry
          org={EXPERIENCE.org}
          place={EXPERIENCE.place}
          role={EXPERIENCE.role}
          period={EXPERIENCE.period}
          bullets={EXPERIENCE.bullets}
        />
        <TimelineEntry
          org={ORG_EXPERIENCE.org}
          place={ORG_EXPERIENCE.place}
          role={ORG_EXPERIENCE.role}
          period={ORG_EXPERIENCE.period}
          bullets={ORG_EXPERIENCE.bullets}
        />

        <article className="entry">
          <div className="entry__head">
            <div>
              <h3 className="entry__org">{EDUCATION.school}</h3>
              <p className="entry__role">{EDUCATION.degree}</p>
            </div>
            <p className="entry__period mono">{EDUCATION.period}</p>
          </div>
          <p className="entry__place">{EDUCATION.address}</p>
          <ul className="entry__list">
            <li>{EDUCATION.gpa}.</li>
            <li>
              Final project: E-Commerce Performance Research — an e-commerce app used to compare
              REST API and tRPC performance with Next.js and Express.js, load-tested with k6
              across response time, P95/P99, throughput, error rate, CPU and RAM usage. More
              below.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
