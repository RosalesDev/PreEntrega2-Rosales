import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <>
      {product == null ? (
        <Container className="text-center mt-5">
          <Spinner variant="info" />
        </Container>
      ) : (
        <ItemDetail {...product} />
      )}
    </>
  );
};
