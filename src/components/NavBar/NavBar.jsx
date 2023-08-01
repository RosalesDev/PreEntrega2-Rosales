import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">Geek Palace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="px-3" id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavLink className={'dropdown-item'} to={'/category/CPU'}>CPUs</NavLink>
              {/* <NavDropdown.Item href="#action/3.1">CPUs</NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.2">Gabinetes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Motherboards
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Memorias Ram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Fuentes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">GPUs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">
                Periféricos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav.Link href="#">
            <CartWidget />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
