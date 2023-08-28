import { useState } from "react";
import { Button, Stack, Container } from "react-bootstrap";
import './ItemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

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


  return (
    <Container className="text-center d-grid">
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
        className="mt-5 fs-6 text-light"
        size="lg"
        variant="primary"
        disabled={quantity * stock == 0}
        onClick={() => onAdd(quantity)}
      >
        {stock > 0 ? "Agregar al carrito" : "Sin Stock :("}
      </Button>

    </Container>
  );
};
