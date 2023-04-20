import "./faqs.css"
import faqs from "./data"
import FAQ from "./FAQ"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const FAQs = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p></p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs