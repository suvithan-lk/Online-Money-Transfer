'use client'

import { useEffect } from 'react'

export default function DarkToggle() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.toggleTheme) {
      return
    }

    window.toggleTheme = function() {
      const html = document.documentElement
      const isDark = html.classList.contains('theme-dark')
      
      if (isDark) {
        html.classList.remove('theme-dark')
        html.classList.add('theme-light')
        localStorage.setItem('theme', 'light')
      } else {
        html.classList.remove('theme-light')
        html.classList.add('theme-dark')
        localStorage.setItem('theme', 'dark')
      }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.remove('theme-light', 'theme-dark')
    document.documentElement.classList.add(`theme-${savedTheme}`)
  }, [])

  return (
    <div className="dark-version">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          onChange={() => window.toggleTheme?.()}
          id="slider"
          defaultChecked={typeof window !== 'undefined' && document.documentElement.classList.contains('theme-dark')}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

