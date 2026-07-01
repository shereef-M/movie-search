import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  async function searchRecipes() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={searchRecipes} />
      {loading && <p>Loading...</p>}

      {!selectedRecipe ? (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="recipe-detail">
          <button onClick={() => setSelectedRecipe(null)}>← Back</button>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
          <h2>{selectedRecipe.strMeal}</h2>
          <p>
            Category: {selectedRecipe.strCategory} | Origin:{" "}
            {selectedRecipe.strArea}
          </p>
          <p>{selectedRecipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default App;
