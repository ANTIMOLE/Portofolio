import { CV_PATH, EMAIL, FULL_NAME, GITHUB_URL, LINKEDIN_URL, LOCATION, PHONE } from '../data'

export default function Footer() {
  return (
    <footer id="contact" className="section footer">
      <div className="section__head">
        <h2>Get in touch</h2>
      </div>

      <div className="wide-max footer__grid">
        <p className="footer__lead">
          I’m open to opportunities where I can learn, contribute, and grow as a software engineer. If you’d like to get in touch, feel free to reach out.
        </p>

        <ul className="footer__list mono">
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`}>{PHONE}</a>
          </li>
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>{LOCATION}</li>
        </ul>
      </div>

      <div className="wide-max footer__bottom">
        <a className="btn btn--primary" href={CV_PATH} download>
          Download CV
        </a>
        <p className="footer__copy mono">© {new Date().getFullYear()} {FULL_NAME}</p>
      </div>
    </footer>
  )
}
