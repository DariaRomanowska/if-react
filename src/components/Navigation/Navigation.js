import React from "react";

import { Logo } from "../icons";
import { SvgButton } from "../SvgButton";

import "./Navigation.css";
import { MenuLinks } from "../MenuLinks";

export const Navigation = () => (
  <nav className={"header--nav"}>
    <Logo />
    <div className={'header--nav_row'}>
      <MenuLinks />
      <SvgButton />
    </div>
  </nav>
);
