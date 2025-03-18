import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <h1 className="text-2xl">E-Shop</h1>
          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
