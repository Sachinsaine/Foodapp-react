import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "./FoodContext";
import styles from "./ItemDetails.module.css";

export const ItemDetails = () => {
  const { id } = useParams();
  const { recipe } = useContext(FoodContext);

  const item = recipe.find((food) => food.id === Number(id));

  if (!item) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageSection}>
          <img src={item.image} alt={item.name} className={styles.image} />

          <span className={styles.rating}>⭐ {item.rating}</span>
        </div>

        <div className={styles.content}>
          <h1>{item.name}</h1>

          <div className={styles.tags}>
            <span>{item.cuisine}</span>
            <span>{item.difficulty}</span>
            <span>{item.mealType.join(", ")}</span>
          </div>

          <div className={styles.info}>
            <p>⏱ Prep Time: {item.prepTimeMinutes} mins</p>
            <p>🔥 Cook Time: {item.cookTimeMinutes} mins</p>
            <p>🍽 Servings: {item.servings}</p>
            <p>🔥 Calories: {item.caloriesPerServing}</p>
          </div>

          <h2>Instructions</h2>

          <ol className={styles.instructions}>
            {item.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
