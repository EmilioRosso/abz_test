import React from "react";

import ManIcon from "../utils/ManIcon";

export default function About() {
  const handleClick = () => {
    window.location = "#registration";
  };

  return (
    <section id="about">
      <h2 className="about__heading">Let's get acquainted</h2>
      <div className="about__image">
        <ManIcon />
      </div>
      <div className="about__main-wrapper">
        <h3 className="about__smallHeading">I am cool frontend developer</h3>
        <p className="about__text">
          We will evaluate how clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries
          without any restriction. <br />
          <br />
          If 3rd party css/javascript libraries are added to the project via
          bower/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service
          directory page P​SD mockup​ into HTML5/CSS3.
        </p>
        <button className="about__button" onClick={handleClick}>
          Sing up now
        </button>
      </div>
    </section>
  );
}
