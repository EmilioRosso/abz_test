import React from "react";
import Media from "react-media";

export default function Slider() {
  const handleClick = () => {
    window.location = "#registration";
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__wrapper">
          <h2 className="slider__heading">
            Test assignment for Frontend Developer position
          </h2>
          <Media
            query="(max-width: 767px)"
            render={() => (
              <p className="slider__text">
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository.
              </p>
            )}
          />

          <Media
            query="(min-width: 768px)"
            render={() => (
              <p className="slider__text">
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository. Please be
                patient, we consider and respond to every application that meets
                minimum requirements. We look forward to your submission. Good
                luck! The photo has to scale in the banner area on the different
                screens
              </p>
            )}
          />

          <div className="slider__button-wrapper">
            <button
              className="slider__button"
              type="button"
              onClick={handleClick}
            >
              Sign in now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
