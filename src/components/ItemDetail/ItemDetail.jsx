import { Col, Container, Row } from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css'

export const ItemDetail = ({ title, description, price, pictureURL, stock}) => {
  return (
    <Container className="detail-container my-5">
      <Row className="text-center py-4">
        <Col>
          <img className="img-fluid w-50" src={pictureURL} alt={`Imagen de: ${title}`} />
          <span className="d-block py-4">{title}</span>
        </Col>
        <Col className="d-flex flex-column justify-content-around px-5">
          <h2>{title}</h2>
          <div>
            <p className="text-start">{description}</p>
          </div>
            <h2 className="py-2 text-info text-start">${price}</h2>
            <h6 className="text-start">Stock: {stock}</h6>
          <ItemCount stock={stock} initial={0}/>
        </Col>
      </Row>
    </Container>
  )
}
