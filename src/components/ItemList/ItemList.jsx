import { Col, Row } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id}>
          <Item {...item} />
        </Col>
      ))}
    </Row>
  );
};
