import React, { useState } from "react";
import { CustomGrid } from "./components/CustomGrid/CustomGrid";
import { Input } from "./components/Input/Input";

function App() {
  const [term, setTerm] = useState("");
  const inputRegExp = new RegExp(/^\/gif\s+/);
  let input = React.createRef();

  const listenInput = (event) => {
    const inputValue = event.target.value;
    if (inputRegExp.test(inputValue)) {
      setTerm(inputValue.replace(inputRegExp, ""));
    }
  };
  // const renderSpan = (term) => {
  //   console.log("hi");
  //   if (/^\/gif\s+.*/.test(term)) {
  //     return <span className="span">/gif</span>;
  //   }
  // };

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
          {/* {renderSpan(term)} */}
          <Input listenInput={listenInput} ref={input} />
        </div>
      </section>
    </div>
  );
}
export default App;
