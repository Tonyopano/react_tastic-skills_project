import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color_generator"


const App = () => {
  return (
    <div className="App">
      {/*Accordion component*/}
      {/* <Accordian /> */}

      {/* {Random color generator component} */}
      <RandomColor />
    </div>
  );
};

export default App;
