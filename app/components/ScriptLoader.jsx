'use client'

import { useEffect } from 'react'

export default function ScriptLoader() {
  useEffect(() => {
    // Function to load a script and return a promise
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`)
        if (existingScript) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.async = false
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load ${src}`))
        document.body.appendChild(script)
      })
    }

    // Load scripts in the correct order
    const loadAllScripts = async () => {
      try {
        // 1. Load jQuery first
        await loadScript('/assets/js/jquery.min.js')
        // Ensure jQuery is available globally
        if (typeof window !== 'undefined' && window.jQuery) {
          window.$ = window.jQuery
        }

        // 2. Load other dependencies
        await loadScript('/assets/js/bootstrap.bundle.min.js')
        await loadScript('/assets/js/meanmenu.js')
        await loadScript('/assets/js/nice-select.min.js')
        await loadScript('/assets/js/slick.min.js')
        await loadScript('/assets/js/magnific-popup.min.js')
        await loadScript('/assets/js/appear.min.js')
        await loadScript('/assets/js/odometer.min.js')

        // 3. Load Owl Carousel (required before main.js)
        await loadScript('/assets/js/owl.carousel.min.js')
        
        // Verify Owl Carousel is loaded
        if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
          console.log('Owl Carousel loaded successfully')
        } else {
          console.warn('Owl Carousel may not be available')
        }

        // 4. Load remaining plugins
        await loadScript('/assets/js/parallax.min.js')
        await loadScript('/assets/js/wow.min.js')
        await loadScript('/assets/js/form-validator.min.js')
        await loadScript('/assets/js/contact-form-script.js')
        await loadScript('/assets/js/jquery.ajaxchimp.min.js')

        // 5. Load main.js last (after all dependencies)
        await loadScript('/assets/js/main.js')
        
        console.log('All scripts loaded successfully')
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadAllScripts)
    } else {
      loadAllScripts()
    }
  }, [])

  return null
}
