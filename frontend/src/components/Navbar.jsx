import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import style from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.nav}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">Logout</Link>
        </div>
      </div>
      <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }} 
      className={style.cart}>
        <button>Buy Cart</button>
      </motion.div>
    </div>
  );
};

export default Navbar;
