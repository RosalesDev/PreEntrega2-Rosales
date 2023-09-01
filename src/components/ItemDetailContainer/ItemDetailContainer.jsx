import { useState, useEffect } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        if (Object.values(productAdapted).length > 1) {
          setProduct(productAdapted);
        } else {
          const productAdapted = { error: "El producto no existe." };
          setProduct(productAdapted);
        }
      })
      .catch((error) => {
        console.log("Error al obtener el producto.", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  const productExist = Object.values(product).length === 1;
  

  return (
    <>
      {isLoading ? (
        <Container className="text-center mt-5">
          <Spinner variant="info" />
        </Container>
      ) : productExist ? (
        <Alert className="alert alert-danger text-danger w-50 m-auto mt-5">
          <h4 className="text-center">{product.error}</h4>
        </Alert>
      ) : (
        <ItemDetail {...product} />
      )}
    </>
  );
};
