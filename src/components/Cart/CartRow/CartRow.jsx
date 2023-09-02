import { Button, Row } from "react-bootstrap";
import Swal from "sweetalert2";

export const CartRow = ({product, removeItem }) => {

  function handleDelete(productId){
    Swal.fire({
      title: 'Quitar producto',
      text: "¿Desea quitar el producto del carrito?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(productId)
      }
    })
  }

  return (
    <Row className="my-2">
      <img
        className="col-3 col-lg-2 cart-row-img"
        src={product.pictureURL}
      ></img>
      <div className="col-6 col-lg-5 my-auto text-center">{product.title}</div>
      <span className="col-2 col-lg-2 my-auto">X{product.quantity}</span>
      <span className="col-10 col-lg-2 my-auto">${product.quantity * product.price}</span>
      <Button
        className="col-1 col-lg-1 w-auto m-auto"
        variant="danger"
        onClick={() => handleDelete(product.id)}
      >
        <i className="text-center bi bi-trash3-fill"></i>
      </Button>
    </Row>
  );
};
