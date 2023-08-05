import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({ id, title, price, pictureURL }) => {
  return (
    <Card className="mx-auto my-2">
      <Card.Img className="p-3" variant="top" src={pictureURL} />
      <Card.Body className="d-grid">
        <Card.Title className="card-title-container">{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link className="btn" to={`/item/${id}`}>Ver detalle</Link>
      </Card.Body>
    </Card>
  );
}
