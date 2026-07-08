import { useContext } from "react";
import { FoodContext } from "./FoodContext";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { recipe, input } = useContext(FoodContext);
  const filterProducts = recipe.filter((food) =>
    food.name.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Popular Recipes</h1>
      <div className={styles.grid}>
        {filterProducts.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.name} className={styles.image} />

              <span className={styles.rating}>⭐ {item.rating}</span>
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>{item.name}</h3>

              <p className={styles.type}>🍽 {item.mealType.join(", ")}</p>

              <button className={styles.button}>
                <Link to={`/itemDetails/${item.id}`}>View Recipe</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
