import "./App.css";
import { useState } from "react";
import { data } from "./data";

function Sight() {
  const [sights, setSights] = useState(data);

  const [showText, setShowText] = useState(false);

  const removeSight = (id) => {
    let newSights = sights.filter((sightlName) => sightlName.id !== id);
    setSights(newSights);
  };

  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText);
  };

  return (
    <div>
      <div>
        <h1>Top {sights.length} sights of NYC</h1>
      </div>
      <div className="container3">
        {sights.map((element) => {
          const { id, sightlName, description, image, showMore } = element;

          return (
            <div key={id} className="container">
              <div>
                <img src={image} alt="sight" width="200px" />
              </div>
              <div>
                <h4>{sightlName}</h4>
              </div>
              <div>
                <p>
                  {showMore
                    ? description
                    : description.substring(0, 200) + " ... "}
                  <button
                    className="btn3"
                    onClick={() => showTextClick(element)}
                  >
                    {showMore ? "Show less " : "Show more"}
                  </button>
                </p>
              </div>

              <div>
                <button className="btn" onClick={() => removeSight(id)}>
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container1">
        <button className="btn" onClick={() => setSights([])}>
          delete all list
        </button>
      </div>
    </div>
  );
}

export default Sight;
