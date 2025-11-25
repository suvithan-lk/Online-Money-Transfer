'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    if (open) {
      document.addEventListener('keydown', onKey)
      // prevent body scroll when sidebar open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

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
              className="navbar-toggler mobile-toggle-btn"
              type="button"
              onClick={() => setOpen(true)}
              aria-controls="mobileSidebar"
              aria-expanded={open}
              aria-label="Open menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*
              Use responsive utility classes so the nav is always visible on md+,
              and for small screens toggle visibility with `open` state.
            */}
            <div className="navbar-collapse mean-menu d-none d-md-flex" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setOpen(false)}>
                    Home
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

      {/* Mobile sidebar overlay */}
      <div
        id="mobileSidebarOverlay"
        className={`mobile-sidebar-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={open ? 'false' : 'true'}
      />

      <aside
        ref={sidebarRef}
        id="mobileSidebar"
        className={`mobile-sidebar ${open ? 'open' : ''}`}
        aria-hidden={open ? 'false' : 'true'}
      >
        <div className="mobile-sidebar-header">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="mobile-logo" />
          </Link>
          <button className="mobile-close-btn" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        </div>

        <nav className="mobile-nav">
          <ul>
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About Us</Link></li>
            <li><Link href="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="mobile-sidebar-cta">
          <Link href="/login" className="login-btn" onClick={() => setOpen(false)}>Log in</Link>
          <Link href="/sign-up" className="btn btn-primary" onClick={() => setOpen(false)}>Register</Link>
        </div>
      </aside>
    </div>
  )
}

