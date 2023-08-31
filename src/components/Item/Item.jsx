import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, title, price, pictureURL }) => {
  return (
    <Link to={`/item/${id}`} className="btn btn-outline-light">
      <Card className="mx-auto my-2">
        <Card.Img className="p-3" variant="top" src={pictureURL} />
        <hr className="my-0 mx-3" />
        <Card.Body className="d-grid">
          <Card.Text className="text-start my-0">
            <small className="fw-medium fs-5">${price}</small>
            <small className="d-block fw-medium text-success">Envío gratis</small>
          </Card.Text>
          <Card.Text className="text-start">{title}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
