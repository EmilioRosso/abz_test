import React from "react";

export default function MainMenu() {
  return (
    <nav className="menu__wrapper">
      <ul className="menu__list">
        <li className="menu__list-item">
          <a
            className="menu__link"
            href="#about
          "
          >
            About Me
          </a>
        </li>
        <li className="menu__list-item">
          <a className="menu__link" href="#registration">
            Relationships
          </a>
        </li>
        <li className="menu__list-item">
          <a className="menu__link" href="#registration">
            Requirements
          </a>
        </li>
        <li className="menu__list-item">
          <a className="menu__link" href="#users">
            Users
          </a>
        </li>
        <li className="menu__list-item">
          <a className="menu__link" href="#registration">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}
