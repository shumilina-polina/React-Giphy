import React, { useState } from "react";
import { CustomGrid } from "./components/CustomGrid/CustomGrid";
import { Input } from "./components/Input/Input";

function App() {
  const [term, setTerm] = useState("");
  
  const listenInput = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="App">
      <section className="container">
        <div className="gif__container">
          <div className="scroll__container">
            <div className="gif__content">
              <CustomGrid term={term} />
            </div>
          </div>
        </div>
        <div className="input__container">
          <Input listenInput={listenInput} />
        </div>
      </section>
    </div>
  );
}
export default App;
