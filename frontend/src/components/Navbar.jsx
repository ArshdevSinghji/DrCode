import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
    if (!userId) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/leads/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      // Clear local storage and navigate to login page
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={style.navbar}>
      <div className={style.nav}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <span style={{cursor:"pointer"}} onClick={handleLogout} className={style.logoutButton}>
            Logout
          </span>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className={style.cart}
      >
        <button>Buy Cart</button>
      </motion.div>
    </div>
  );
};

export default Navbar;