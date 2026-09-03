import { CERTIFICATION, SKILLS, SOFT_SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <h2>Skills</h2>
      </div>

      <div className="wide-max skills-grid">
        {SKILLS.map((group) => (
          <div key={group.group} className="skills-group">
            <h3 className="skills-group__title">{group.group}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="wide-max skills-footer">
        <div>
          <h3 className="skills-group__title">Soft Skills</h3>
          <p className="skills-footer__text">{SOFT_SKILLS.join(' · ')}</p>
        </div>
        <div>
          <h3 className="skills-group__title">Certification</h3>
          <p className="skills-footer__text">{CERTIFICATION}</p>
        </div>
      </div>
    </section>
  )
}
