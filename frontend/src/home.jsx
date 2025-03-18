import { useState } from "react";
import { products } from "../products";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [category, setCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">E-Commerce Store</h1>

      {/* Category Filters */}
      <div className="flex gap-4 my-4">
        {["All", "Electronics", "Clothing", "Home"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="font-bold">${product.price}</p>
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
