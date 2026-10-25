import { useState, useEffect } from 'react'

export default function HeaderHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className={`header-hero ${loaded ? 'loaded' : ''}`}>
      {/* Background Layer */}
      <div className="header-bg">
        <img 
          src="https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1920&h=800&fit=crop" 
          alt="Gedung Kementerian Pertahanan"
          loading="eager"
        />
      </div>
      
      {/* Indonesian Flag Overlay */}
      <div className="flag-overlay" aria-hidden="true">
        <div className="flag-red">
          <div className="flag-wave"></div>
        </div>
        <div className="flag-white">
          <div className="flag-wave"></div>
        </div>
      </div>

      {/* Logo & Text */}
      <div className="header-logo">
        <div className="logo-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Emblem_of_the_Ministry_of_Defense_of_the_Republic_of_Indonesia.svg/400px-Emblem_of_the_Ministry_of_Defense_of_the_Republic_of_Indonesia.svg.png" 
            alt="Logo Kementerian Pertahanan Republik Indonesia"
            className="logo-img"
          />
          <div className="logo-glow"></div>
        </div>
        <div className="logo-text">
          <span>KEMENTERIAN</span>
          <span>PERTAHANAN</span>
          <span>REPUBLIK INDONESIA</span>
        </div>
      </div>

      {/* Building Name */}
      <div className="building-text" aria-hidden="true">
        JENDERAL SOEDIRMAN
      </div>

      {/* Garuda Symbol */}
      <div className="garuda-symbol" aria-hidden="true">
        🦅
      </div>
    </header>
  )
}