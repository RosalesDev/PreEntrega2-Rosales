import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartRow } from "./CartRow/CartRow";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  return cart.length === 0 ? (
    <Alert className="text-center m-5">El carrito está vacío.</Alert>
  ) : (
    <Container className="my-5">
      <h1 className="mb-5 text-center">Detalle del carrito</h1>
      {cart.map((product, index) => {
        console.log(product.quantity);
        return (
          <div key={product.id}>
            <CartRow
              cart={cart}
              index={index}
              product={product}
              removeItem={removeItem}
            ></CartRow>
            <hr />
          </div>
        );
      })}
      <Row className="justify-content-end">
        <Button
          className="col-lg-2 mb-4 py-2 fs-6"
          size="lg"
          variant="danger"
          onClick={clearCart}
        >
          <i className="bi bi-x-circle">
            <span className="px-1 text-light fw-semibold">Limpiar Carrito</span>
          </i>
        </Button>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <div className="alert alert-info">
            <h5>Total: ${total}</h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button
          className="col-lg-4 p-0 fs-6 text-light"
          size="lg"
          variant="success"
        >
          <Link
            className="btn w-100 p-0 my-2 text-light fw-semibold"
            to={`/cart`}
          >
            <span className="me-1">Terminar Compra</span>
            <i className="bi bi-arrow-right-circle"></i>
          </Link>
        </Button>
      </Row>
    </Container>
  );
};
