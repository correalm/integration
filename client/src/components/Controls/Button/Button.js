import "./Button.sass";

import pin from "../../../assets/Pin.svg";
import trash from "../../../assets/Trash.svg";

import React from "react";

const Button = ({ func, className, text, svg }) => {
  return (
    <button onClick={func} className={className}>
      {text}
      {svg && <img src={svg === "pin" ? pin : trash} alt="svg"/>}
    </button>
  );
};

export default Button;
