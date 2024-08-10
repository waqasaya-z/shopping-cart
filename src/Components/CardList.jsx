import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { AddCartProduct, useProductCart } from "../context/ProductContext";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const AddToCard = useProductCart()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4 bg-gray-100 gap-2">
      <h1 className="text-lg font-bold mb-2"> Products </h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-2 flex flex-col">
            <img className="w-full h-40" src={product.image} />
            <div className="gap-2 mt-2">
              <h1 className="font-semibold">{product.title.slice(0, 20)}</h1>
              <span>${product.price}</span>
            </div>
            <div className="mx-auto p-2">
              <button>
                {" "}
                <FaMinus />{" "}
              </button>
              <span>1 in cart </span>
              <button>
                {" "}
                <FaPlus />{" "}
              </button>
            </div>
            <button
              onClick={() => AddToCard(product)}
              className="text-white w-1/2 bg-red-700 rounded-md p-2 font-bold mx-auto"
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
