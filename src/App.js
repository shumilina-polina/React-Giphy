import React, { useState } from "react";
import { CustomGrid } from "./components/CustomGrid/CustomGrid";
import { Input } from "./components/Input/Input";

function App() {
  const [term, setTerm] = useState("");

  let input = React.createRef();

  const listenInput = (event) => {
    if (/^\/gif\s+/.test(event.target.value)) {
      setGifClick();
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
        <CustomGrid term={term} gifClick={gifClick} onGifClick={onGifClick} />
        <Input listenInput={listenInput} ref={input} />
      </section>
    </div>
  );
}
export default App;
