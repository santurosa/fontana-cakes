import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo-center">
          <img src="../public/img/logo-blanco.png" alt="Logo" width="60%" />
        </div>
        <div className="left-links">
          <ul>
            <Link to="/categoria/chocolateria" className="links">Chocolateria</Link>
            <Link to="/categoria/comestibles" className="links">Comestibles</Link>
            <Link to="/categoria/decoracion" className="links">Decoración</Link>
            <Link to="/categoria/descartables" className="links">Descartables</Link>
            <Link to="/categoria/herramientas" className="links">Herramientas</Link>
            <Link to="/categoria/moldes" className="links">Moldes</Link>
            <Link to="/categoria/nuevo" className="links">¡LO NUEVO!</Link>
          </ul>
        </div>
        <div className="right-links">
          <Nav.Link><Link to="/categoria/showroom" className="links">¿Cómo Llegar?</Link></Nav.Link>
          <Nav.Link><Link to="/categoria/cursos" className="links">Cursos</Link></Nav.Link>
          <Nav.Link><Link to="/categoria/pago" className="links">Métodos de Pago</Link></Nav.Link>
          <Nav.Link><Link to="/categoria/pyr" className="links">Preguntas Frecuentes</Link></Nav.Link>
          <Nav.Link><Link to="/categoria/devolucion" className="links">Politicas de Devolución</Link></Nav.Link>
        </div>
      </div>
      <div className="copyright">
        <p>© Fontana Cakes 2023. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer