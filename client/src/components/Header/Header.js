import "./Header.sass";
import { memo } from "react";

import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Gestão de pontos no mapa</h1>
    </header>
  );
};

export default memo(Header);
