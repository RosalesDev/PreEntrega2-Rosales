import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  const quantityProductsInCart =
    cart.length === 0
      ? 0
      : cart
          .map((prod) => prod.quantity)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const total = cart
    .map((prod) => prod.price * prod.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (!localStorage.getItem("cart") && cart.length > 0) {
    console.log('No hay localStorage supuestamente');
    const localCart = JSON.stringify(cart);
    localStorage.setItem("cart", localCart);
  }

  useEffect(() => {
    console.log('UseEffect');
    if (localStorage.getItem("cart")) {
      let localCart = [];
      localCart = JSON.parse(localStorage.getItem("cart"));
      setCart(localCart);
    }
  }, []);

  function addItem(item, quantity) {
    const objToLocalCart = { ...item, quantity };
    let localCart = [];

    if (!existInCart(item.id)) {
      if (localStorage.getItem("cart")) {
        console.log(JSON.parse(localStorage.getItem("cart")));
        localCart = JSON.parse(localStorage.getItem("cart"));
        localCart.push(objToLocalCart);
        localStorage.setItem("cart", JSON.stringify(localCart));
      }
      setCart((prev) => [...prev, objToLocalCart]);
    } else {
      console.log("El producto ya fue agregado");
    }
  }

  function existInCart(itemId) {
    return cart.some((product) => product.id === itemId);
  }

  function removeItem(itemId) {
    const cartUpdated = cart.filter((product) => product.id !== itemId);
    localStorage.setItem('cart',JSON.stringify(cartUpdated));
    setCart(cartUpdated);
  }

  function clearCart() {
    localStorage.clear();
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityProductsInCart,
        total,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
