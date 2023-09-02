import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartRow } from "./CartRow/CartRow";
import "./Cart.css";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  function handleClear() {
    Swal.fire({
      title: "Vaciar el carrito",
      text: "¿Seguro que desea vaciar el carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
      }
    });
  }

  return cart.length === 0 ? (
    <>
      <Alert className="text-center m-5 fw-medium" variant="danger">
        El carrito está vacío.
      </Alert>
      <div className="d-grid">
        <Link to={"/"} className="btn cart-btn-back w-25 m-auto fw-medium">
          Volver
        </Link>
      </div>
    </>
  ) : (
    <Container className="my-5">
      <h1 className="mb-5 text-center">Detalle del carrito</h1>
      <Row className="justify-content-end">
        <Button
          className="col-6 mx-1 col-lg-2 mb-4"
          variant="outline-danger"
          onClick={() => handleClear()}
        >
          Vaciar Carrito
        </Button>
      </Row>
      {cart.map((product, index) => {
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

      <Row>
        <Col className="text-center">
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
            to={`/checkout`}
          >
            <span className="me-1">Terminar Compra</span>
            <i className="bi bi-arrow-right-circle"></i>
          </Link>
        </Button>
      </Row>
    </Container>
  );
};
