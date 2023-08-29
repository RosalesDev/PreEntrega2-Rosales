import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import {db} from "../../config/firebaseConfig"
import {where, query, collection, getDocs} from "firebase/firestore"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    setIsLoading(true);

    const collectionRef = categoryId
      ? query(collection(db,'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        console.log('Error al obtener los productos: ',error);
      })
      .finally(() => {
        setIsLoading(false);
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
          <ItemList items={products} isLoading={!isLoading} />
        </Container>
      )}
    </>
  );
}

export default ItemListContainer;
