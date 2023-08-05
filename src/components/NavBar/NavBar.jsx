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
        <Navbar.Brand><NavLink className={'nav-link'} to={'/'}>Geek Palace</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="px-3" id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink className={'dropdown-item'} to={'/category/CPU'}>CPU</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={'dropdown-item'} to={'/category/GABINETES'}>Gabinetes</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={'dropdown-item'} to={'/category/MOTHERBOARD'}>Motherboard</NavLink>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink className={'dropdown-item nav-link'} to={'/category/'}>Todo</NavLink>
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
