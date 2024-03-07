// importing hooks arrow buttons from react  modules
//imporing syle module

import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

// creating Image slider component which
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]); //for setting images in state
  const [currentSlide, setCurrentSlide] = useState(0); //for setting current slide on the slider
  const [errorMsg, setErrorMsg] = useState(null); //for displaying error messages when loading images fail
  const [loading, setLoading] = useState(false); //for setting loading while fetching images from API


// Fetch images from the server url and load them into the browser window using the specified parameters and callback function for each loaded image.
  async function fetchImages(getUrl) {
    try { // Get images from the server url and load hence loading state must be true.
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) { //Set images from the url and set loading state to false since images are already loaded.
        setImages(data);
        setLoading(false);
      }
    } catch (e) { //catch any exceptions that might be thrown during loading and set loading to false.
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators"></span>
      {images && images.length
        ? images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-current-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))
        : null}
    </div>
  );
};

export default ImageSlider;
