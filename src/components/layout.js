import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'
import InfoCard from './info-card.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className= {navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Design</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/stem" className={navLinkText}>STEM</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/teaching" className={navLinkText}>Teaching</Link>
          </li>
        </ul>
      </nav>
      <InfoCard></InfoCard>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout