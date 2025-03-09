import Opening from "./views/opening";
import { Routes, Route } from 'react-router-dom'; 
import Pokedex from "./views/pokedex";
import MyCards from "./views/myCards";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/myCards" element={<MyCards />} />
      </Routes>
    </>
  );
}

export default App;