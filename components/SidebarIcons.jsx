import { SIDEBAR_ICONS } from '../data/siteData'

export default function SidebarIcons() {
  return (
    <div className="sidebar-icons" role="complementary" aria-label="Quick access links">
      {SIDEBAR_ICONS.map((item) => (
        <button
          key={item.id}
          className="sidebar-icon"
          onClick={() => alert(`Membuka ${item.label}...`)}
          title={item.label}
          aria-label={item.label}
          style={{ '--icon-color': item.color }}
        >
          <span className="icon-emoji">{item.icon}</span>
          <span className="icon-label">{item.label}</span>
        </button>
      ))}
    </div>
  )
}