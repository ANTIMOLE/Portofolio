import { NAV_LINKS } from '../data'

import { useState } from 'react'



export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__mark mono" aria-label="Back to top">
          AKS
        </a>
        <button className='nav__toggle' type='button' aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Menu"}
        </button>
        <nav
          aria-label="Section navigation"
          className={isOpen ? "nav__menu is-open" : "nav__menu"}
        >
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
