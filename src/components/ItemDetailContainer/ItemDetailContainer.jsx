import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(product);

  return (
    <ItemDetail {...product} />
  )
}
