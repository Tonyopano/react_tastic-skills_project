import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color_generator";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

const App = () => {
  return (
    <div className="App">
      {/*Accordion component*/}
      {/* <Accordian /> */}

      {/* {Random color generator component} */}
      {/* <RandomColor /> */}

      {/* {Star rating component} */}
      {/* {<StarRating noOfStars={10} />} */}

      {/* {Image slider component} */}
      {
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      }
    </div>
  );
};
export default App;
