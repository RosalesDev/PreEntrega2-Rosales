import { Container } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  return (
    <Container fluid>
      <h1 className="pt-4 text-center">{ greeting }</h1>
    </Container>
  );
}

export default ItemListContainer;
