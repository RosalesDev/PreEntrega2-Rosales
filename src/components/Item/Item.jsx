import { Card, Button } from "react-bootstrap"
import './Item.css'
import { Link } from "react-router-dom";

export const Item = ({ id, title, price, pictureURL }) => {
  return (
    <Card className="mx-auto">
      <Card.Img className="p-3" variant="top" src={pictureURL} />
      <Card.Body className="d-grid">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link className="btn" to={`/item/${id}`}>Ver detalle</Link>
        {/* <Button variant="primary">Ver detalle</Button> */}
      </Card.Body>
    </Card>
  );
}
