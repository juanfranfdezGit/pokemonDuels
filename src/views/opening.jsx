import { useState } from "react";

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
      </>
    );
  }
  
  export default Opening;