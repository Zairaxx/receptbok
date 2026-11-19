// TODO steg 3: Importera useParams från "react-router-dom"
// TODO steg 4: Importera useState och useEffect från "react"

function RecipeDetails() {
  // TODO steg 3: Hämta id från URL:en med useParams

  // TODO steg 4: Skapa ett state för receptet (startvärde: null)

  // TODO steg 4: Hämta receptet i en useEffect.
  // URL: https://dummyjson.com/recipes/ + id
  // Glöm inte [id] sist i useEffect!

  // TODO steg 4: Om receptet inte har kommit än – visa "Laddar..."

  return (
    <div className="recipe-details">
      <h1>Receptsida</h1>
      {/* TODO steg 3: Visa id:t här, t.ex. "Du tittar på recept 3" */}

      {/* TODO steg 4: Visa receptets namn, bild, kök (cuisine)
          och svårighetsgrad (difficulty) */}
    </div>
  );
}

export default RecipeDetails;
