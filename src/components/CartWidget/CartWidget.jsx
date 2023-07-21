import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import cartSVG from "../../assets/cart-svg.svg";
import { Col, Row } from "react-bootstrap";

function CartWidget() {
  return (
    <Button variant="outline-dark">
      <Container>
        <Row>
          <Col>
            <img src={cartSVG} height={30} alt="Cart Icon" />
            <Badge bg="secondary">0</Badge>
          </Col>
        </Row>
      </Container>

      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartWidget;
