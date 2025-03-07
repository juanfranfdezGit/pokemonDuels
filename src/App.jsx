import Opening from "./views/opening";
import { Routes, Route } from 'react-router-dom'; 
import Pokedex from "./views/pokedex";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  );
}

export default App;