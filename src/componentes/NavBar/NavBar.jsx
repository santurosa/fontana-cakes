import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#"><img className='logo' src="../public/img/logo.png" alt="Fontana Cakes"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="categorias me-auto">
                        <Nav.Link href="#">Chocolateria</Nav.Link>
                        <Nav.Link href="#">Comestibles</Nav.Link>
                        <Nav.Link href="#">¡LO NUEVO!</Nav.Link>
                        <Nav.Link href="#">Herramientas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            <CardWidget/>
            </Container>
        </Navbar>
    );

}

export default NavBar;