import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader visible={loading} />
      <div
        className={`bg-background text-foreground transition-opacity duration-700 ${
          loading ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main>
          <Hero ready={!loading} />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        {!loading && <ScrollToTopButton />}
      </div>
    </>
  )
}

export default App
