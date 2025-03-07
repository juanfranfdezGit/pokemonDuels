import { useState } from "react";
import MainMenu from "./mainMenu";

function Opening() {

    const [started, setStarted] = useState(false)

    function handleStarted() {
        setStarted(true);
    }

    return (
      <>
        <main className={`pokeball__opening ${started ? "started" : ""}`}>
          <div onClick={handleStarted} className={`pokeball__opening-button ${started ? "started" : ""}`}>
          </div>
        </main>

        <MainMenu />
      </>
    );
  }
  
  export default Opening;