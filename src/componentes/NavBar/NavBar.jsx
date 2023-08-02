import CardWidget from '../CardWidget/CardWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className='anuncio'><p className='texto-anuncio'>Envíos gratis por Correo Argentino para compras superiores a $20.000.</p></div>
            <Navbar bg="white" expand="lg" data-bs-theme="light" className='nav bg-body-tertiary'>
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img src="../public/img/logo.png" width="156.6" height="78.6" className="d-inline-block align-top" alt="Fontana Cakes" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><NavLink to="/categoria/chocolateria" className="categoria">Chocolateria</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/categoria/comestibles" className="categoria">Comestibles</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/categoria/decoracion" className="categoria">Decoración</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/categoria/descartables" className="categoria">Descartables</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/categoria/herramientas" className="categoria">Herramientas</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/categoria/moldes" className="categoria">Moldes</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/categoria/nuevo" className="categoria">¡LO NUEVO!</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CardWidget />
                </Container>
            </Navbar>
        </>
    );

}

export default NavBar;