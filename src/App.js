import { useState } from "react";
import { CustomGrid } from "./components/CustomGrid/CustomGrid";
import { Input } from "./components/Input/Input";

function App() {
  const [value, setValue] = useState("");

  // let a = document.querySelector('.gif__content');

  const listenInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <section className="container">
        <div className="gif__container">
          <div className="scroll__container">
            <div className="gif__content">
              <CustomGrid temp={"cat"} />
            </div>
          </div>
        </div>
        <div className="input__container">
          <Input value={value} listenInput={listenInput} />
        </div>
      </section>
    </div>
  );
}
export default App;
