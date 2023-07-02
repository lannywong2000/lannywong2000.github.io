import "./header.css"
import HeaderImage from "../../assets/header.jpg"
import data from "./data"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <h3 data-aos="fade-up">Ruoyu (Lanny) Wang</h3>
        <p data-aos="fade-up">Master of Computer Science @ UC Irvine <br /> Data Engineering & Analytics Intern @ Myriad Genetics <br /> Ex-Software Engineer Intern @ WeChat, Tencent <br /> AWS Certified Developer Associate <br /> Professional Scrum Master</p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#portfolio" className='btn primary'>My Works</a>
          <a href="#contact" className='btn light'>Let's Talk</a>
        </div>
        <div data-aos="fade-up" className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank"
            rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header