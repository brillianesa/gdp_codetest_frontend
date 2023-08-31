import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return(<Navbar collapseOnSelect
        expand="lg"
        className="bg-body-tertiary fixed-navbar">
        <Container>
            <Navbar.Brand href="#home">
                <img src="https://www.amartek.id/i/logo/weblogo-amartek.png" height="40" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='justify-content-end' style={{ width: "100%" }}>
                    <Nav.Link href="https://www.amartek.id/">
                        <button type="button" class="btn btn-outline-primary btn-sm">About Us</button>
                    </Nav.Link>
                    <Nav.Link href="login">
                        <button type="button" class="btn btn-outline-success btn-sm">Login</button>
                    </Nav.Link>
                    <Nav.Link href="home">
                        <img src="https://cdn-icons-png.flaticon.com/512/74/74807.png" width="32" height="32" style={{ marginTop: "12%", marginLeft: "30%" }} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default NavBar;