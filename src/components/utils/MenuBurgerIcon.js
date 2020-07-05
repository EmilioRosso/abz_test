import React from "react";

export default function MenuBurgerIcon(props) {
  return (
    <button
      onClick={props.onOpen}
      type="button"
      style={{ border: "none", backgroundColor: "transparent" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="#1b4a8a"
        fillRule="evenodd"
      >
        <path
          id="menu_icon"
          dataName="menu icon"
          d="M325,13h20v3H325V13Zm0,6h20v3H325V19Zm0,6h20v3H325V25Z"
          transform="translate(-325 -13)"
        />
      </svg>

      {/* <svg
        style={{ cursor: "pointer" }}
        width="22"
        height="22"
        viewBox="0 0 22 18"
        fill="none"
      >
        <rect y="2" width="22" height="3" fill="#1b4a8a" />
        <rect y="8" width="22" height="3" fill="#1b4a8a" />
        <rect y="14" width="22" height="3" fill="#1b4a8a" />
      </svg> */}
    </button>
  );
}
