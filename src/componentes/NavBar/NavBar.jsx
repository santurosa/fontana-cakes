import CardWidget from '../CardWidget/CardWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg" className='nav'>
            <Container>
                <Link to="/"><Navbar.Brand href="#"><img className='logo' src="../public/img/logo.png" alt="Fontana Cakes"/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/categoria/1" className="categoria">Chocolateria</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/2" className="categoria">Comestibles</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/3" className="categoria">¡LO NUEVO!</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/4" className="categoria">Herramientas</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            <CardWidget/>
            </Container>
        </Navbar>
    );

}

export default NavBar;