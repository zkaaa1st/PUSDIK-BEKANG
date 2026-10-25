import { useState } from 'react'
import { SIDEBAR_NEWS, STATISTICS } from '../data/siteData'
import { isValidEmail } from '../utils/helpers'

export default function SidebarWidgets() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Masukkan email yang valid')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <aside className="sidebar" role="complementary" aria-label="Sidebar widgets">
      {/* Latest News Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">📰 Berita Terkini</h3>
        <ul className="widget-news-list">
          {SIDEBAR_NEWS.map((news, index) => (
            <li key={index}>
              <a href="#">{news}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Statistics Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">📊 Statistik Pengunjung</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Hari Ini</span>
            <span className="stat-value">{STATISTICS.today}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Bulan Ini</span>
            <span className="stat-value">{STATISTICS.month}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total</span>
            <span className="stat-value">{STATISTICS.total}</span>
          </div>
          <div className="stat-item online">
            <span className="stat-label">Online</span>
            <span className="stat-value">
              <span className="online-dot"></span>
              {STATISTICS.online}
            </span>
          </div>
        </div>
      </div>

      {/* Related Links Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">🔗 Tautan Terkait</h3>
        <ul className="widget-links">
          <li><a href="#">🏛️ Mabes TNI</a></li>
          <li><a href="#">⭐ TNI AD</a></li>
          <li><a href="#">⚓ TNI AL</a></li>
          <li><a href="#">✈️ TNI AU</a></li>
          <li><a href="#">🛡️ Kemhan RI</a></li>
          <li><a href="#">🇮 Presiden RI</a></li>
        </ul>
      </div>

      {/* Newsletter Widget */}
      <div className="sidebar-widget newsletter-widget">
        <h3 className="widget-title">📧 Newsletter</h3>
        <p className="widget-desc">
          Dapatkan berita terbaru langsung di email Anda
        </p>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Anda..."
            aria-label="Email address"
          />
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="subscribe-btn">
            {subscribed ? '✓ Berhasil!' : 'Berlangganan'}
          </button>
        </form>
      </div>
    </aside>
  )
}