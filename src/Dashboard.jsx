import { useContext } from "react";
import { FoodContext } from "./FoodContext";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const { recipe, input, loading, wishList, setWishList } =
    useContext(FoodContext);
  const filterProducts = recipe.filter((food) =>
    food.name.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Popular Recipes</h1>
      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <div className={styles.card} key={index}>
                <Skeleton variant="rectangular" width="100%" height={220} />

                <div className={styles.content}>
                  <Skeleton variant="text" width="80%" height={30} />
                  <Skeleton variant="text" width="50%" height={20} />
                  <Skeleton variant="rounded" width="100%" height={40} />
                </div>
              </div>
            ))
          : filterProducts.map((item) => {
              const iswishlist = wishList.some((wish) => wish.id === item.id);

              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.image}
                    />
                    <span className={styles.rating}>⭐ {item.rating}</span>
                  </div>

                  <div className={styles.content}>
                    <h3 className={styles.title}>{item.name}</h3>

                    <div className={styles.wishCont}>
                      {iswishlist ? (
                        <IoIosHeart
                          className={`${styles.wish} ${styles.active}`}
                          onClick={() => {
                            setWishList((prev) =>
                              prev.filter((wish) => wish.id !== item.id),
                            );
                          }}
                        />
                      ) : (
                        <IoIosHeartEmpty
                          className={`${styles.wish} ${styles.heartIcon}`}
                          onClick={() => {
                            setWishList((prev) => [...prev, item]);
                            toast.success("Added to Wishlist");
                          }}
                        />
                      )}

                      <p className={styles.type}>
                        🍽 {item.mealType.join(", ")}
                      </p>
                    </div>

                    <button className={styles.button}>
                      <Link to={`/itemDetails/${item.id}`}>View Recipe</Link>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};
