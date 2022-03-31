import React, { useState } from "react";
import { CustomGrid } from "./components/CustomGrid/CustomGrid";
import { Input } from "./components/Input/Input";

function App() {
  const [term, setTerm] = useState("");

  let input = React.createRef();

  const listenInput = (event) => {
    if (/^\/gif\s+/.test(event.target.value)) {
      setTerm(event.target.value.replace(/^\/gif\s+/, ""));
      input.current.classList.add("input__gif");
    } else input.current.classList.remove("input__gif");
  };

  const [gifClick, setGifClick] = useState();

  const onGifClick = (gif, event) => {
    event.preventDefault();
    setGifClick(gif);
    setTerm("");
    input.current.value = "";
    input.current.classList.remove("input__gif");
  };

  return (
    <div className="App">
      <section className="container">
        <div className="gif__container">
          <div className="scroll__container">
            <div className="gif__content">
              <CustomGrid
                term={term}
                gifClick={gifClick}
                onGifClick={onGifClick}
              />
            </div>
          </div>
        </div>
        <div className="input__container">
          <Input listenInput={listenInput} ref={input} />
        </div>
      </section>
    </div>
  );
}
export default App;
