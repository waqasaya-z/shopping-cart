import { CiShoppingCart } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex items-center justify-between p-4 text-gray-600">
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
      </ul>
      <div className="mr-4">
        <CiShoppingCart className="h-6 w-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        { isOpen && <ShoppingCart setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
