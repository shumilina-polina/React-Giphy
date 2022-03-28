import { Input } from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="gif__container">
          <div className="gif__content"></div>
        </div>
        <div className="input__container">
          <Input />
        </div>
      </div>
    </div>
  );
}
export default App;
