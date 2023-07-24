import { Container, Spinner } from "react-bootstrap";
// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  // const [toastStatus, setToastStatus] = useState({
  //   show: false,
  //   currentQuantity: 0,
  // });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const messages = [
  //   `Se agregaron ${toastStatus.currentQuantity} productos al carrito.`,
  //   "Se agregó 1 producto al carrito.",
  // ];

  // function onAdd(quantity) {
  //   setToastStatus({
  //     show: true,
  //     currentQuantity: quantity,
  //   });
  // }

  // function setShow(show) {
  //   setToastStatus({
  //     show: show,
  //     currentQuantity: toastStatus.currentQuantity,
  //   });
  // }

  return (
    <Container>
      <h1 className="pt-4 text-center">{greeting}</h1>
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
      {products.length == 0 
        ? <Container className="text-center mt-5">
            <Spinner variant="info" />
          </Container>
        : <ItemList items={products}/>}
      
      {/* {<Container className="d-flex justify-content-center">
        <div className="mx-auto pt-5">
          <Toast
            onClose={() => setShow(false)}
            bg="info"
            show={toastStatus.show}
            delay={3000}
            autohide
          >
            <Toast.Body className="text-center text-light">
              {toastStatus.currentQuantity > 1 ? messages[0] : messages[1]}
            </Toast.Body>
          </Toast>
        </div>
      </Container> }*/}
    </Container>
  );
}

export default ItemListContainer;
