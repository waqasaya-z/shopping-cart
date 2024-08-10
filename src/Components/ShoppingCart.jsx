import ReactDom from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { useCart } from "../context/ProductContext";

const ShoppingCart = ({ setIsOpen }) => {
  const cartProducts = useCart();

    console.log("Cart Product is" + JSON.stringify(cartProducts));

  return ReactDom.createPortal(
    <div className=" bg-white w-1/3 h-auto absolute top-0 right-0 z-50 border-4 border-gray-400">
      <div className="absolute right-2 top-2 font-bold p-2">
        {" "}
        <RxCross1 className="w-8 h-8" onClick={() => setIsOpen(false)} />{" "}
      </div>
      {cartProducts.length == 0 ? <div className="text-red-800 font-bold p-4"> Cart is Empty. </div> : 
      <>
      {cartProducts.map((cartProduct) => (
          <div
          className="flex m-2 border border-gray-500 p-2"
          key={cartProduct.id}
        >
          <img className="w-1/5 h-auto" src={cartProduct.image} />
          <div className="flex flex-col ml-4 font-bold justify-center">
            <div> {cartProduct.title} </div>
            <div> ${cartProduct.price} </div>
            <div> Quanitiy: 1 </div>
          </div>
        </div>
      ))}
      </>
    }
      <div className="font-bold p-2">
        {" "}
        <div> Total: $ </div>
        <button className="flex text-white w-1/3 bg-red-700 rounded-md p-2 font-bold mx-auto justify-center">
          {" "}
          Checkout{" "}
        </button>{" "}
      </div>
    </div>,
    document.getElementById("cart")
  );
};

export default ShoppingCart;
