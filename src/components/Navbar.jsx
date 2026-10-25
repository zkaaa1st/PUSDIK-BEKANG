import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION } from '../data/siteData'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition(100)
  const location = useLocation()
  const navRef = useRef(null)

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null)
        setActiveSubmenu(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMenu(null)
    setActiveSubmenu(null)
  }, [location])

  const handleMenuEnter = (menuId) => {
    setActiveMenu(menuId)
    setActiveSubmenu(null)
  }

  const handleSubmenuEnter = (submenuId) => {
    setActiveSubmenu(submenuId)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
    setActiveSubmenu(null)
  }

  const isActivePath = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <nav 
      ref={navRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {NAVIGATION.map((item) => (
            <li 
              key={item.id}
              className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
              onMouseEnter={() => handleMenuEnter(item.id)}
              onMouseLeave={handleMenuLeave}
            >
              <button 
                className={`nav-link ${isActivePath(item.path) ? 'current' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                aria-haspopup="true"
                aria-expanded={activeMenu === item.id}
              >
                {item.label}
                {item.children && <span className="arrow">▾</span>}
              </button>

              {item.children && (
                <div className={`dropdown ${activeMenu === item.id ? 'visible' : ''}`}>
                  {item.children.map((child) => (
                    <div 
                      key={child.id}
                      className={`dropdown-item ${child.children ? 'has-submenu' : ''} ${activeSubmenu === child.id ? 'active' : ''}`}
                      onMouseEnter={() => child.children && handleSubmenuEnter(child.id)}
                    >
                      {child.children ? (
                        <>
                          <button className="dropdown-link">
                            {child.label}
                            <span className="sub-arrow">▸</span>
                          </button>
                          <div className={`sub-dropdown ${activeSubmenu === child.id ? 'visible' : ''}`}>
                            {child.children.map((sub) => (
                              <Link
                                key={sub.id}
                                to={sub.path}
                                className={`sub-dropdown-link ${isActivePath(sub.path) ? 'current' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          to={child.path}
                          className={`dropdown-link ${isActivePath(child.path) ? 'current' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search Button */}
        <button 
          className="nav-search"
          onClick={() => alert('Fitur search akan segera hadir!')}
          aria-label="Search"
        >
          🔍
        </button>
      </div>
    </nav>
  )
}