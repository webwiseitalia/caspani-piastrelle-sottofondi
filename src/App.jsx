import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Servizi from './pages/Servizi'
import Galleria from './pages/Galleria'
import Contatti from './pages/Contatti'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
