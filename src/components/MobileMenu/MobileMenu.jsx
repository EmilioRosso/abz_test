import React from "react";

import LogoIcon from "../utils/LogoIcon";

export default function MobileMenu(props) {
  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose(false);
    }
  };

  return (
    <div className="mobile-menu__backdrop" onClick={handleClose}>
      <nav className="mobile-menu">
        <div className="mobile-menu__logo">
          <LogoIcon />
        </div>
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#about">
              About me
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Relationships
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#users">
              Users
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Sign up
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Terms and Conditions
            </a>
          </li>
        </ul>
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              How it works
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Partnership
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Help
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Leave testimonial
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Contact us
            </a>
          </li>
        </ul>
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Articles
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Our news
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Testimonials
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Licenses
            </a>
          </li>
          <li className="mobile-menu__list-item">
            <a className="mobile-menu__link" href="#registration">
              Privacy policy
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
