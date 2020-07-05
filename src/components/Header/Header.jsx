import React, { useState } from "react";
import Media from "react-media";

import MainMenu from "../MainMenu/MainMenu";

import LogoIcon from "../utils/LogoIcon";
import MenuBurgerIcon from "../utils/MenuBurgerIcon";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <LogoIcon />
        <Media
          query="(max-width: 1023px)"
          render={() => <MenuBurgerIcon onOpen={() => setIsMenuOpen(true)} />}
        />
        {isMenuOpen && <MobileMenu onClose={setIsMenuOpen} />}
        <Media query="(min-width: 1024px)" render={() => <MainMenu />} />
      </div>
    </header>
  );
}
