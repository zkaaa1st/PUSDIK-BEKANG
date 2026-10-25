import { NEWS_ITEMS } from '../data/siteData'
import { truncateText } from '../utils/helpers'

export default function NewsList() {
  return (
    <div className="news-list" role="feed" aria-label="Latest news">
      <div className="news-list-header">
        <h2>📰 Berita Terbaru</h2>
        <a href="/berita-media/berita" className="view-all">Lihat Semua →</a>
      </div>
      
      <div className="news-items">
        {NEWS_ITEMS.map((item) => (
          <article key={item.id} className="news-item" tabIndex="0">
            <div className="news-image">
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
              />
              <span className="news-category">{item.category}</span>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="news-date">📅 {item.date}</span>
                <span className="news-author">✍️ {item.author}</span>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{truncateText(item.excerpt, 120)}</p>
              <button className="read-more">
                Baca Selengkapnya →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}