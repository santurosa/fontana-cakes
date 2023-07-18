import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
<footer>
        <div className="container">
          <div className="left-links">
            <ul>
              <li><a href="html/que_es_indesability.html">¿Qué es Indesability?</a></li>
              <li><a href="html/blog.html">Blog</a></li>
              <li><a href="html/sumate.html">Sumate</a></li>
              <li><a href="html/contacto.html">Contacto</a></li>
            </ul>
          </div>
          <div className="logo-center">
            <img src="../public/img/logo.png" alt="Logo" />
          </div>
          <div className="right-links">
            <li><a href="https://www.instagram.com/">
                <i className="bi bi-instagram" /> Instagram</a></li>
            <li><a href="https://www.facebook.com/">
                <i className="bi bi-facebook" /> Facebook</a></li>
            <li><a href="https://twitter.com/">
                <i className="bi bi-twitter" /> Twitter</a></li>
            <li><a href="mailto:info@indesability.com">
                <i className="bi bi-envelope" /> info@indesability.com</a></li>
          </div>
        </div>
        <div className="copyright">
          <p>© Fontana Cakes 2023. Todos los derechos reservados.</p>
        </div>
      </footer>
  )
}

export default Footer