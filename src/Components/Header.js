import React from "react";
import logo from "../images/logo.svg";
import github from "../images/github.svg";
import lightmode from "../images/light-mode.svg";
export default function Header() {
  return (
    <nav className="flex justify-between flex-row px-20 pt-5">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="icons flex justify-between">
        <div className="icon px-10">
          <a href="/" target="_blank">
            <img src={github} alt="" />
          </a>
        </div>
        <div className="icon cursor-pointer">
          <img src={lightmode} alt="" />
        </div>
      </div>
    </nav>
  );
}
