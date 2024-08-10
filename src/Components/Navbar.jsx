import { CiShoppingCart } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { useCart } from "../context/ProductContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartProducts = useCart();

  return (
    <div className="flex items-center justify-between p-4 text-gray-600">
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
      </ul>
      <div className="mr-4">
        <div className="relative">
          <CiShoppingCart
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="absolute top-3 -right-1 rounded-full h-4 w-4 flex items-center justify-center bg-white border border-black font-bold text-xs">
            {" "}
            {cartProducts.length}{" "}
          </div>
        </div>
        {isOpen && <ShoppingCart setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
