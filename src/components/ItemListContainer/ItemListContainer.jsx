import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      {isLoading ? (
        <Container className="text-center mt-5">
          <Spinner variant="info" />
        </Container>
      ) : (
        <Container className="my-5">
          <h1 className="my-4 text-center">{greeting}</h1>
          <ItemList items={products} />
        </Container>
      )}
    </>
  );
}

export default ItemListContainer;
