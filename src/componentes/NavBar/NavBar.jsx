import CardWidget from '../CardWidget/CardWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg" data-bs-theme="light"className='nav bg-body-tertiary'>
            <Container>
                <Link to="/" className='inicio'><Navbar.Brand><img className='logo' src="../public/img/logo.png" alt="Fontana Cakes"/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/categoria/chocolateria" className="categoria">Chocolateria</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/comestibles" className="categoria">Comestibles</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/decoracion" className="categoria">Decoración</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/descartables" className="categoria">Descartables</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/herramientas" className="categoria">Herramientas</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/moldes" className="categoria">Moldes</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/nuevo" className="categoria">¡LO NUEVO!</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            <CardWidget/>
            </Container>
        </Navbar>
    );

}

export default NavBar;