import Opening from "./views/opening";
import { Routes, Route } from 'react-router-dom'; 
import Pokedex from "./views/pokedex";
import MyCards from "./views/myCards";
import Shop from "./views/shop";
import Oponents from "./views/oponents";
import OponentsFight from "./views/oponentFight";
import Help from "./views/help"
import NewUser from "./views/newUser";
import MainMenu from "./views/mainMenu";
import { GameProvider } from "./context/GameContext"; 

function App() {

  return (
    <>
      <GameProvider>
        <Routes>
            <Route path="/" element={<Opening />} />
            <Route path="/menu" element={<MainMenu />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/myCards" element={<MyCards />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/oponents" element={<Oponents />} />
            <Route path="/oponents/:name" element={<OponentsFight />} />
            <Route path="/help" element={<Help />} />
            <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </GameProvider>
    </>
  );
}

export default App;