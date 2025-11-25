"use client"

import { useEffect, useState, useRef } from 'react'

export default function PromotionCarousel({ autoplayInterval = 4000 }) {
  const slides = [
    {
      title: 'Limited Time: 0% Fees for First Transfer',
      subtitle: 'Send money now with zero fees for first-time customers',
      cta: 'Send Now',
      bg: 'linear-gradient(90deg,#1cc29f,#20c997)'
    },
    {
      title: 'Refer & Earn',
      subtitle: 'Invite friends and earn rewards on each transfer',
      cta: 'Invite Friends',
      bg: 'linear-gradient(90deg,#ffb86b,#ff7a7a)'
    },
    {
      title: 'Faster payouts to 50+ countries',
      subtitle: 'Improved rails for quicker delivery and better rates',
      cta: 'Learn More',
      bg: 'linear-gradient(90deg,#6a82fb,#fc5c7d)'
    }
  ]

  const [index, setIndex] = useState(0)
  const paused = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function startAutoplay() {
    stopAutoplay()
    intervalRef.current = setInterval(() => {
      if (!paused.current) setIndex(i => (i + 1) % slides.length)
    }, autoplayInterval)
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function go(n) {
    setIndex((n + slides.length) % slides.length)
  }

  return (
    <section
      className="promotion-carousel"
      style={{ padding: '40px 0' }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto', position: 'relative', padding: '0 20px' }}>
        <div style={{ overflow: 'hidden', borderRadius: 12 }}>
          {slides.map((s, i) => (
            <div
              key={i}
              aria-hidden={i !== index}
              style={{
                display: i === index ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '28px 36px',
                color: '#fff',
                background: s.bg
              }}
            >
              <div style={{ maxWidth: '65%' }}>
                <h3 style={{ margin: 0, fontSize: 26 }}>{s.title}</h3>
                <p style={{ margin: '10px 0 0', opacity: 0.95 }}>{s.subtitle}</p>
                <button
                  style={{
                    marginTop: 14,
                    background: 'rgba(255,255,255,0.12)',
                    border: 'none',
                    color: '#fff',
                    padding: '10px 16px',
                    borderRadius: 8,
                    cursor: 'pointer'
                  }}
                  onClick={() => alert(s.cta)}
                >
                  {s.cta}
                </button>
              </div>

              <div style={{ width: 160, textAlign: 'right' }}>
                <video
                  src="/assets/img/currency-transfer-provider/banner/banner-bg.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  style={{ width: 140, height: 80, objectFit: 'cover', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.12)' }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Previous"
          onClick={() => go(index - 1)}
          style={{ position: 'absolute', left: -40, top: '50%', transform: 'translateY(-50%)', border: 'none', background: '#fff', width: 36, height: 36, borderRadius: 18, boxShadow: '0 4px 12px rgba(0,0,0,0.12)', cursor: 'pointer' }}
        >
          ‹
        </button>

        <button
          aria-label="Next"
          onClick={() => go(index + 1)}
          style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', border: 'none', background: '#fff', width: 36, height: 36, borderRadius: 18, boxShadow: '0 4px 12px rgba(0,0,0,0.12)', cursor: 'pointer' }}
        >
          ›
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12, gap: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                border: 'none',
                background: i === index ? '#111' : '#ddd',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
