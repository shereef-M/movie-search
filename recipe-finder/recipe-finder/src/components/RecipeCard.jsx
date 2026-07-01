function RecipeCard({ recipe, setSelectedRecipe }) {
  if (!recipe) return null;

  return (
    <div className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-info">
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strCategory}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
