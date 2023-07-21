import { Container } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

function ItemListContainer({ greeting }) {
  return (
    <Container fluid>
      <h1 className="pt-4 text-center">{ greeting }</h1>
      <ItemCount stock={12} initial={1} />
    </Container>
  );
}

export default ItemListContainer;
