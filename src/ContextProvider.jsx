import { useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";

export const ContextProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getRecipe() {
      try {
        let fetchData = await fetch("https://dummyjson.com/recipes");
        let recipeData = await fetchData.json();
        setRecipe(recipeData.recipes);
      } catch (err) {
        console.log(err);
      }
    }
    getRecipe();
  }, []);

  return (
    <FoodContext.Provider value={{ recipe, setRecipe, input, setInput }}>
      {children}
    </FoodContext.Provider>
  );
};
