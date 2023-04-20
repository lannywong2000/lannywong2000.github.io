import "./footer.css"
import { links, socials } from "./data"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="container footer__container">
        <ul className="nav__menu">
          {
            links.map(link => <li keys={link.id}><a href={link.link}>{link.title}</a></li>)
          }
        </ul>
        <div className="footer__socials">
          {
            socials.map(social => <a key={social.id} href={social.link} target="_blank" rel="noopner noreferrer">{social.icon}</a>)
          }
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; {year} Ruoyu (Lanny) Wang</small>
      </div>
    </footer>
  )
}

export default Footer