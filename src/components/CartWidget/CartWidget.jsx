import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import cartSVG from "../../assets/cart-svg.svg";
import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { quantityProductsInCart } = useContext(CartContext);

  return (
    <Link to={'/cart'}>
      <Button variant="outline-dark">
        <Container>
          <Row>
            <Col>
              <img src={cartSVG} height={30} alt="Cart Icon" />
              <Badge bg="secondary">{quantityProductsInCart}</Badge>
            </Col>
          </Row>
        </Container>

        <span className="visually-hidden">unread messages</span>
      </Button>
    </Link>
  );
}

export default CartWidget;
