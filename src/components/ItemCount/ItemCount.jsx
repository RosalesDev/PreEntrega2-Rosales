import { useState } from "react";
import { Button, Stack, Container, Toast, Row, Col } from "react-bootstrap";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(stock > 0 ? initial : 0);
  const [show, setShow] = useState(false);

  function increaseQuantity() {
    if (stock > 0 && stock > quantity) {
      setQuantity(quantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function onAdd() {
    setShow(true);
  }

  return (
    <Container className="w-25 text-center d-grid">
      <Stack className="mx-auto w-50" direction="horizontal">
        <Button
          className="ms-4 btn btn-light fs-5"
          onClick={decreaseQuantity}
        >
          -
        </Button>
        <span className="text-center mx-auto fs-5">{quantity}</span>
        <Button
          className="me-4 btn btn-light fs-5"
          onClick={increaseQuantity}
        >
          +
        </Button>
      </Stack>
      <Button
        className="mt-4 fs-6 text-light"
        size="lg"
        variant="success"
        disabled={quantity * stock == 0}
        onClick={onAdd}
      >
        {stock > 0 ? "Agregar al carrito" : "Sin Stock :("}
      </Button>
      <div className="mx-auto pt-5">
        <Toast onClose={() => setShow(false)} bg="info" show={show} delay={3000} autohide>
          <Toast.Body>
            Se agregaron {quantity} productos al carrito.
          </Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};
