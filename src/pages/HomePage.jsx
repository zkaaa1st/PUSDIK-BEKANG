import HeaderHero from '../components/HeaderHero'
import Navbar from '../components/Navbar'
import SidebarIcons from '../components/SidebarIcons'
import NewsSlider from '../components/NewsSlider'
import BirthdayBanner from '../components/BirthdayBanner'
import NewsList from '../components/NewsList'
import SidebarWidgets from '../components/Sidebarwidgets'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="home-page">
      <HeaderHero />
      <Navbar />
      <SidebarIcons />
      
      <main className="main-content">
        <div className="content-area">
          <NewsSlider />
          <BirthdayBanner />
          <NewsList />
        </div>
        <SidebarWidgets />
      </main>

      <Footer />
    </div>
  )
}