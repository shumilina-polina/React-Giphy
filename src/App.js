import React, { useState } from "react";
import { CustomGrid } from "./components/CustomGrid/CustomGrid";
import { Input } from "./components/Input/Input";

function App() {
  const [term, setTerm] = useState("");
  const [comb, setComb] = useState("gifs");
  const [gifClick, setGifClick] = useState();
  const [gifArr, setGifArr] = useState([]);

  let input = React.createRef();

  const listenInput = (event) => {
    if (event.target.type === "text") {
      const inputRegexpWithLet = new RegExp(/^\/(gif|sticker)\s+\S/);
      const inputRegexpNoLet = new RegExp(/^\/(gif|sticker)\s+/);
      const value = event.target.value;

      if (inputRegexpWithLet.test(value)) {
        setGifClick();
        setTerm(value.replace(inputRegexpNoLet, ""));

        let resRegexp = inputRegexpWithLet.exec(value);
        if (!(resRegexp === null)) setComb(resRegexp[1] + "s");
      }

      inputRegexpNoLet.test(value)
        ? event.target.classList.add("input__gif")
        : event.target.classList.remove("input__gif");
    } else {
      onGifClick(event.target.files[0], event);
      event.target.value = "";
    }
  };

  const onGifClick = (gif, event) => {
    event.preventDefault();
    setGifClick(gif);
    setTerm("");
    input.current.value = "";
    input.current.classList.remove("input__gif");

    const copyGifArr = Object.assign([], gifArr);
    gif.currentTime = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, "");
    copyGifArr.push(gif);
    setGifArr(copyGifArr);
  };

  return (
    <div className="App">
      <section className="container">
        <CustomGrid
          term={term}
          type={comb}
          gifClick={gifClick}
          onGifClick={onGifClick}
          gifArr={gifArr}
        />
        <Input listenInput={listenInput} ref={input} />
      </section>
    </div>
  );
}
export default App;
