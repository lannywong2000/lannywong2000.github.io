import NavBar from "./sections/navbar/NavBar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Services from "./sections/services/Services"
import Portfolio from "./sections/portfolio/Portfolio"
import Testimonials from "./sections/testimonials/Testimonials"
import FAQs from "./sections/faqs/FAQs"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import FloatingNav from "./sections/floating-nav/FloatingNav"
import { useRef, useState, useEffect } from "react"


const App = () => {
  const mainRef = useRef()
  const [showFloatingNav, setShowFloatingNav] = useState(true)
  const [siteYPosition, setSiteYPosition] = useState(0)

  const floatingNavToggleHandler = () => {
    if (siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      setShowFloatingNav(true)
    } else {
      setShowFloatingNav(false)
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000)

    return () => clearInterval(checkYPosition)
  }, [siteYPosition])

  return (
    <main ref={mainRef}>
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
    </main>
  )
}

export default App