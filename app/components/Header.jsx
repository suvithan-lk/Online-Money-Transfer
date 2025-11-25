'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar-area currency-transfer-provider-navbar">
      <div className="ajeer-responsive-nav">
        <div className="container">
          <div className="ajeer-responsive-menu">
            <div className="logo">
              <Link href="/">
                <div className="logo-content d-flex align-items-center">
                  <img src="/logo.svg" alt="Ajeer" className="logo-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="ajeer-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              <div className="logo-content d-flex align-items-center">
                <img src="/logo.svg" alt="Ajeer" className="logo-icon" />
              </div>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setOpen(!open)}
              aria-controls="navbarSupportedContent"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*
              Use responsive utility classes so the nav is always visible on md+,
              and for small screens toggle visibility with `open` state.
            */}
            <div className={`navbar-collapse mean-menu ${open ? 'd-block' : 'd-none'} d-md-flex`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setOpen(false)}>
                    Home <i className="fas fa-chevron-down"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/how-it-works" className={`nav-link ${pathname === '/how-it-works' ? 'active' : ''}`} onClick={() => setOpen(false)}>
                    How It Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="others-options d-flex align-items-center">
                <div className="options-item">
                  <Link href="/login" className="login-btn" onClick={() => setOpen(false)}>Log in</Link>
                </div>
                <div className="options-item">
                  <Link href="/sign-up" className="btn btn-primary" onClick={() => setOpen(false)}>Register</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* removed duplicate responsive options block to avoid overlay issues */}
    </div>
  )
}

