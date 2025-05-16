import "./App.css";
import { useState } from "react";
import { data } from "./data";

function Carousel() {
  const [sight, setSight] = useState(0);
  const { image } = data[sight];

  const previousSight = () => {
    setSight((sight) => {
      sight--;
      if (sight < 0) {
        return data.length - 1;
      }
      return sight;
    });
  };

  const nextSight = () => {
    setSight((sight) => {
      sight++;
      if (sight > data.length - 1) {
        sight = 0;
      }
      return sight;
    });
  };
  return (
    <div className="container1">
      <div>
        <button className="btn1" onClick={previousSight}>
          next
        </button>
      </div>
      <div className="containerImg">
        <img src={image} width="300px" alt="sight" />
      </div>
      <div>
        <button className="btn1" onClick={nextSight}>
          next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
