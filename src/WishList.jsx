import { useContext } from "react";
import { FoodContext } from "./FoodContext";
import { MdDelete } from "react-icons/md";
import styles from "./WishList.module.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const WishList = () => {
  const { wishList, setWishList } = useContext(FoodContext);

  const handleRemove = (i) => {
    const temp = wishList.filter((item) => item.id !== i);
    setWishList(temp);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        ❤️ My Wishlist
        <span>({wishList.length})</span>
      </h1>

      {wishList.length === 0 ? (
        <div className={styles.empty}>
          <h2>Your wishlist is empty 💔</h2>
          <Link to="/">Start adding your favourite recipes.</Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {wishList.map((item) => {
            return (
              <div key={item.id}>
                <div className={styles.card} key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                  />

                  <div className={styles.content}>
                    <h3>{item.name}</h3>

                    {/* <p>🍽 {item.mealType.join(", ")}</p> */}
                    <p>
                      <b>Ingredients:</b> {item.ingredients}
                    </p>
                    <p>
                      <b>Instructions:</b> {item.instructions}
                    </p>

                    <span className={styles.rating}>⭐ {item.rating}</span>
                  </div>

                  <button
                    className={styles.deleteBtn}
                    onClick={() => {
                      handleRemove(item.id);
                      toast.error("Removed from the Wishlist");
                    }}
                  >
                    <MdDelete size={24} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
