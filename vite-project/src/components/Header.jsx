
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/Header.css";
import { NavLink } from 'react-router-dom';




const Header = () => {
    return (
        <div className='container-fluid px-0'>
            <Navbar collapseOnSelect expand="md" className="bg-dark text-uppercase">
                <Container fluid>
                    <Navbar.Brand className='text-light mx-3' href="/">John Doe</Navbar.Brand>
                    <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end mx-3' id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/" end>Acceuil</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/Services">Services</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/Portfolio">Portfolio</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/Contact">Contact</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'} to="/Mentions">Mentions légales</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Header;

