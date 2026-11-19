import { useState, useEffect } from "react";
// TODO steg 2: Importera Link från "react-router-dom"

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  // Den här delen är redan klar: vi hämtar 12 recept från API:et.
  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=12")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div>
      <h1>Recept</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            {/* TODO steg 2: Gör om namnet till en <Link>.
                Länken ska gå till /recipes/ + receptets id.
                Tips: använd en template literal med backticks. */}
            <span>{recipe.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
