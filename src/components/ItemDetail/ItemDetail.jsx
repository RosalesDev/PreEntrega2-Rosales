import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Toast, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({
  id,
  title,
  description,
  price,
  pictureURL,
  stock,
}) => {
  /* ----------------- ESTADO PARA MOSTRAR Y OCULTAR EL TOAST ----------------- */
  const [toastStatus, setToastStatus] = useState({
    show: false,
    currentQuantity: 0,
  });

  const {addItem} = useContext(CartContext);

  const messages = [
    `Se agregaron ${toastStatus.currentQuantity} productos al carrito.`,
    "Se agregó 1 producto al carrito.",
  ];

  function onAdd(quantity) {
    const itemForCart = {
      id,
      title,
      description,
      price,
      pictureURL,
    };

    addItem(itemForCart, quantity);

    setToastStatus({
      show: true,
      currentQuantity: quantity,
    });
  }

  function setShow(show) {
    setToastStatus({
      show: show,
      currentQuantity: toastStatus.currentQuantity,
    });
  }

  return (
    <>
      <Container className="position-relative">
        <Toast
          className="position-absolute top-50 end-0"
          onClose={() => setShow(false)}
          bg="warning"
          show={toastStatus.show}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-center text-light">
            {toastStatus.currentQuantity > 1 ? messages[0] : messages[1]}
          </Toast.Body>
        </Toast>
      </Container>
      <Container className="detail-container my-5">
        <Row className="text-center py-4">
          <Col>
            <img
              className="img-fluid w-50"
              src={pictureURL}
              alt={`Imagen de: ${title}`}
            />
            <span className="d-block py-4">{title}</span>
          </Col>
          <Col className="d-flex flex-column justify-content-around px-5">
            <h2>{title}</h2>
            <div>
              <p className="text-start">{description}</p>
            </div>
            <h2 className="py-2 text-info text-start">${price}</h2>
            <h6 className="text-start">Stock: {stock}</h6>
            {toastStatus.currentQuantity > 0 ? (
              <Row lg={4} className="justify-content-between">
                <Button
                  className="col-lg-4 mt-4 p-0 fs-6"
                  size="lg"
                  variant="info"
                >
                  <Link
                    className="btn w-100 p-0 my-2 text-light fw-semibold"
                    to={"/"}
                  >
                    <i className="bi bi-arrow-left-circle"> Volver</i>
                    
                  </Link>
                </Button>
                <Button
                  className="col-lg-4 mt-4 p-0 fs-6 text-light"
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
            ) : (
              <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
