import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Regional from '@/components/sections/Regional'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import DigitalCard from '@/components/sections/DigitalCard'

function App() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Regional />
        <Education />
        <DigitalCard />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
