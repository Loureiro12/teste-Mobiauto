import React, { Fragment, useState, useEffect, useRef } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer } from "./components";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(false);
  const [slideDuration] = useState(3000);
  const [lastSlide] = useState(catalogs.length - 1);
  const myInterval = useRef(null);

  function handlePreviousButton() {
    setActiveIndex((state) => {
      if (state > 0) return state - 1;
      else return lastSlide;
    });
  }

  function handleNextButton() {
    setActiveIndex((state) => {
      if (state < lastSlide) return state + 1;
      else return 0;
    });
  }

  function clickImage(index) {
    setActiveIndex(index);
  }

  function startImage() {
    setSlideTimer((state) => !state);
  }

  useEffect(() => {
    if (slideTimer) {
      myInterval.current = setInterval(handleNextButton, [slideDuration]);
    } else {
      clearInterval(myInterval.current);
    }
  }, [slideTimer]);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={handlePreviousButton}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                handleImage={clickImage}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={handleNextButton}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            data-testid="toggle-slide-show-button"
            onChange={startImage}
          />
          <label className="ml-6">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
