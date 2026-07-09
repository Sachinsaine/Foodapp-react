import { useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";

export const ContextProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      try {
        let fetchData = await fetch("https://dummyjson.com/recipes");
        let recipeData = await fetchData.json();
        setRecipe(recipeData.recipes);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getRecipe();
  }, []);

  return (
    <FoodContext.Provider
      value={{ recipe, input, setInput, loading, wishList, setWishList }}
    >
      {children}
    </FoodContext.Provider>
  );
};
