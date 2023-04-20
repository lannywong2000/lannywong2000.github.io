import "./about.css"
import AboutPortrait from "../../assets/about.jpg"
import CV from "../../assets/cv.pdf"
import { HiDownload } from "react-icons/hi"
import Card from "../../components/Card"
import data from "./data"

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutPortrait} alt="About Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>I am a first-year Master of Computer Science student at the University of California, Irvine. I received my Bachelor's degree in Computer Science & Technology from 
            the South China University of Technology with a minor certificate in Finance. During my undergraduate, I attended the University of California, Berkeley for an international 
            study program and aced two computer science courses with a heavy workload. My education experience has equipped me with competent computer programming and problem-solving skills, 
            which were put to test by interning as a software engineer at WeChat, Tencent. The internship solidates and intensifies my passion to become a professional software engineer. 
            Please feel welcome to contact me with any related opportunities.</p>
          <p>In my spare time, I enjoy playing table tennis and going outdoors with my friends. I am a huge music lover and play several instruments including violin, guitar, and bass.</p>
          <a href={CV} download className="btn primary">Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About