import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color_generator";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from ".";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

const App = () => {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordian /> */}

      {/* {Random color generator component} */}
      <RandomColor />

      {/* {Star rating component} */}
      {/* {<StarRating noOfStars={10} />} */}

      {/* {Image slider component} */}
      {/* {
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      } */}

      {/* {Load more data component} */}
      {/* {<LoadMoreData />} */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* light and dark mode switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator in broser */}
      <ScrollIndicator url='https://dummyjson.com/products?limit=100'/>
    </div>
  );
};
export default App;