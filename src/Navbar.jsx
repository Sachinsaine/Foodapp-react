import styles from "./Navbar.module.css";
import { FaSearch, FaShoppingCart, FaUtensils } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FaUtensils />
        <span>FoodHub</span>
      </div>

      <div className={styles.search}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search delicious food..." />
      </div>

      <div className={styles.links}>
        <a href="/">Home</a>
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
