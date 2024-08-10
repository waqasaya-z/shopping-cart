import React from "react";

const ProductContext = React.createContext();
const CartContext = React.createContext();

export const useProductCart = () => {
  return React.useContext(ProductContext);
};
export const useCart = () => {
  return React.useContext(CartContext);
};

export function AddCartProduct(product) {
  return product;
}
const ProductContextProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = React.useState([]);

  function AddToCard(product) {
    setCartProduct((prev) => [...prev, product]);
  }

  console.log(cartProduct);

  return (
    <ProductContext.Provider value={AddToCard}>
      <CartContext.Provider value={cartProduct}>
        {children}
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
