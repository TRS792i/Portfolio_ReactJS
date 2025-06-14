
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/Header.css";
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" className="bg-dark text-uppercase">
                <Container fluid>
                    <Navbar.Brand className='text-light mx-3' href="/">John Doe</Navbar.Brand>
                    <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end mx-3' id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className='navlink text-light' as={Link} to="/">Acceuil</Nav.Link>
                            <Nav.Link className='navlink text-light' as={Link} to="/Services">Services</Nav.Link>
                            <Nav.Link className='navlink text-light' as={Link} to="/Portfolio">Portfolio</Nav.Link>
                            <Nav.Link className='navlink text-light' as={Link} to="/Contact">Contact</Nav.Link>
                            <Nav.Link className='navlink text-light' as={Link} to="/Mentions">Mentions légales</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Header;