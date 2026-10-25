import { Link } from 'react-router-dom'
import { FOOTER_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '../data/siteData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Main Menu */}
          <div className="footer-col">
            <h4 className="footer-heading">Menu Utama</h4>
            <ul className="footer-links">
              {FOOTER_LINKS.menuUtama.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Tautan</h4>
            <ul className="footer-links">
              {FOOTER_LINKS.tautan.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div className="footer-col">
            <h4 className="footer-heading">Organisasi</h4>
            <ul className="footer-links">
              {FOOTER_LINKS.organisasi.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Informasi Kontak</h4>
            <div className="contact-details">
              <p>📍 {CONTACT_INFO.address}</p>
              <p>📞 {CONTACT_INFO.phone}</p>
              <p>✉️ {CONTACT_INFO.email}</p>
              <p>🌐 {CONTACT_INFO.website}</p>
            </div>
            
            <div className="footer-social">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="social-link"
                  title={social.label}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Kementerian Pertahanan Republik Indonesia. 
            Hak Cipta Dilindungi.
          </p>
          <p className="footer-address">
            {CONTACT_INFO.address} | Telp: {CONTACT_INFO.phone}
          </p>
        </div>
      </div>
    </footer>
  )
}