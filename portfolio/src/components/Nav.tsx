import { NAV_LINKS } from '../data'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__mark mono" aria-label="Back to top">
          AKS
        </a>
        <nav aria-label="Section navigation">
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
