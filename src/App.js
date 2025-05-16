import "./App.css";
import Carousel from "./Carousel";
import Sight from "./Sight";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1>What you must to see in New-York!</h1>
        </div>
        <div>
          <Carousel />
        </div>
      </div>

      <div>
        <Sight />
      </div>
    </div>
  );
}

export default App;
