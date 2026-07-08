import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSearch, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { useContext } from "react";
import { FoodContext } from "./FoodContext";

export const Navbar = () => {
  const { input, setInput } = useContext(FoodContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <FaUtensils />
          <span>FoodHub</span>
        </Link>
      </div>

      <div className={styles.search}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search delicious food..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <a href="/">Categories</a>
        <a href="/">Offers</a>
        <a href="/">Contact</a>
      </div>

      <div className={styles.cart}>
        <FaShoppingCart size={24} />
        <span className={styles.badge}>0</span>
      </div>
    </nav>
  );
};
