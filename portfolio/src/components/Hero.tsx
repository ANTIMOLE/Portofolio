import { CV_PATH, EDUCATION, FULL_NAME, FOCUS_ITEMS, OPEN_TO  } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero__grid">
        <div className="hero__intro">
          <p className="hero__eyebrow mono">{EDUCATION.gpa} · {EDUCATION.school.replace('Universitas ', '')}</p>
          <h1 className="hero__name">{FULL_NAME}</h1>
          <p className="hero__role">
            I’m always looking to learn something new, build on what I already know, and grow through real-world experience. I enjoy adapting to new challenges and finding better ways to approach them.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#work">
              See the work
            </a>
            <a className="btn" href={CV_PATH} download>
              Download CV
            </a>
          </div>
        </div>

       <div className="hero__panel" aria-hidden="false">
  <p className="hero__panel-title mono">CURRENT FOCUS</p>

  <table className="log-table">
    <thead>
      <tr>
        <th scope="col">Area</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {FOCUS_ITEMS.map((item, i) => (
        <tr key={item.id} className="log-row" style={{ animationDelay: `${i * 70}ms` }}>
          <td>
            <span className="mono log-id">{item.id}</span> {item.label}
          </td>
          <td className="mono log-metric">{item.value}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <div className="hero__panel-footer">
    <span className="hero__panel-label mono">open to</span>
    <div className="tag-row">
      {OPEN_TO.map((item) => (
        <span key={item.id} className="tag">
          {item.label}
        </span>
      ))}
    </div>
  </div>
</div>
</div>
    </section>
  )
}
