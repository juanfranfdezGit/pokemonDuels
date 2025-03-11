import Opening from "./views/opening";
import { Routes, Route } from 'react-router-dom'; 
import Pokedex from "./views/pokedex";
import MyCards from "./views/myCards";
import Shop from "./views/shop";
import Oponents from "./views/oponents";
import OponentsFight from "./views/oponentFight";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/myCards" element={<MyCards />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/oponents" element={<Oponents />} />
        <Route path="/oponents/:name" element={<OponentsFight />} />
      </Routes>
    </>
  );
}

export default App;