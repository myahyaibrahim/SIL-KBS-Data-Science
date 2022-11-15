import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#home">KBS - SIL</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;