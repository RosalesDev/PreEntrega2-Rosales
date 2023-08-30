import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Container, Alert, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, lastName, email, phoneNumber }) => {
    setIsLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          lastName,
          email,
          phoneNumber,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      
      const batch = writeBatch(db);
      const outOfStockList = [];
      const productsInCartIds = cart.map(product => product.id);

      const productCollectionRef = collection(db,'products');
      const productsInCartFromFirestore = await getDocs(query(productCollectionRef, where(documentId(), 'in', productsInCartIds)));

      const { docs } = productsInCartFromFirestore;

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockInDb = dataDoc.stock;

        const productInCart = cart.find(product => product.id === doc.id);
        const prodQuantity = productInCart?.quantity;

        if(stockInDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockInDb - prodQuantity });
        } else {
          outOfStockList.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStockList.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      }

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Alert className="w-50 my-5 text-center m-auto">Generando orden... <Spinner variant="info" /></Alert>
  }
  if (orderId) {
    return (
      <Container className="d-grid">
        <Alert className="w-50 my-5 text-center m-auto">El id de su orden es: { orderId }</Alert>
        <Link to={'/'} className="btn btn-outline-success m-auto px-5">Volver</Link>
      </Container>
      
    )
  }

  return <CheckoutForm onConfirm={createOrder} />;
};
