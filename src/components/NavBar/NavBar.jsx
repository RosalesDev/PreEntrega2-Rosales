import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { where, query, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const categoriesRef = collection(db, "categories");
    let fetchCategories = [];

    getDocs(categoriesRef)
      .then((response) => {
        response.docs.map((category) => {
          fetchCategories.push({ id: category.id, ...category.data() });
        });
        setCategories(fetchCategories);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
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
                {isLoading
                  ? null
                  : categories.map((category) => {
                      return (
                        <li key={category.id}>
                          <NavLink
                            className={"dropdown-item"}
                            to={`/category/${category.key}`}
                          >
                            {category.description}
                          </NavLink>
                        </li>
                      );
                    })}
              </ul>
            </li>
          </ul>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
