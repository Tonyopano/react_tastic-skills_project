import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color_generator"
import StarRating from "./components/star-rating";


const App = () => {
  return (
    <div className="App">
      {/*Accordion component*/}
      {/* <Accordian /> */} 

      {/* {Random color generator component} */}
      {/* <RandomColor /> */}

      {/* {Star rating component} */}
      {<StarRating noOfStars={10} />}


    </div>
  );
};

export default App;
