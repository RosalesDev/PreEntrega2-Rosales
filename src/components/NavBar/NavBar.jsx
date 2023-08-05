import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
        <Navbar.Brand>
          <NavLink className={"nav-link"} to={"/"}>
            Geek Palace
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="px-3" id="basic-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={"nav-link"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={"dropdown-item"} to={"/category/cpu"}>
                    CPU
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"dropdown-item"}
                    to={"/category/gabinetes"}
                  >
                    Gabinetes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"dropdown-item"}
                    to={"/category/motherboard"}
                  >
                    Motherboard
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className={"dropdown-item nav-link"}
                    to={"/category/"}
                  >
                    Todo
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <Nav.Link href="#">
            <CartWidget />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
