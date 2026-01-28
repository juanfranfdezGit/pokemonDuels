import { Routes, Route } from 'react-router-dom'; 
import MainMenu from "./views/mainMenu/mainMenu";
import Pokedex from "./views/home/pokedex/pokedex";
import MyCards from "./views/home/myCards/myCards";
import Shop from "./views/home/shop/shop";
import Help from "./views/home/help/help"
import NewUser from "./views/mainMenu/newUser/newUser";
import Upload from "./views/mainMenu/continue/upload";
import SideBar from "./views/common/sideBar";
import Page404 from "./views/404/page404";
import { GameProvider } from "./context/GameContext"; 

function App() {

  return (
    <>
      <GameProvider>
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/menu" element={<SideBar />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/myCards" element={<MyCards />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/help" element={<Help />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </GameProvider>
    </>
  );
}

export default App;