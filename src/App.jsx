import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
// TODO steg 1: Importera RecipeDetails från "./pages/RecipeDetails"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />

          {/* TODO steg 1: Lägg till en route med path "/recipes/:id"
              som visar komponenten <RecipeDetails /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
