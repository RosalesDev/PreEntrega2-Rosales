import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const quantityProductsInCart = cart.length === 0
        ? 0
        : cart.map(prod => prod.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const total = cart.map(prod => (prod.price * prod.quantity)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  function addItem(item, quantity){
    if(!isInCart(item.id)){
      setCart(prev => [...prev, {...item, quantity}]);
    }else{
      console.log('El producto ya fue agregado');
    }
  }

  function isInCart(itemId){
    return cart.some(product => product.id === itemId);
  }

  function removeItem (itemId){
    const cartUpdated = cart.filter(product => product.id !== itemId);
    setCart(cartUpdated);
  }

  function clearCart(){
    setCart([]);
  }


  return(
    <CartContext.Provider value={{cart,quantityProductsInCart, total, addItem, removeItem, clearCart}}>
      { children }
    </CartContext.Provider>
  )
}
