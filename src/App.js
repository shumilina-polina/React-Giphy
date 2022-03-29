import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";
import { GifList } from "./components/GifList/GifList";
import { Input } from "./components/Input/Input";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

  const callGiphy = async () => {
    const result = await giphy.search("cat", {
      sort: "relevant",
      lang: "es",
      limit: 5,
      type: "gifs",
    });
    setResult(result.data);
  };

  const listenInput = (event) => {
    setValue(event.target.value);
  };

  callGiphy();

  return (
    <div className="App">
      <section className="container">
        <div className="gif__container">
          <div className="gif__content">
            <GifList result={result} />
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
