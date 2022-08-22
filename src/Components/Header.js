import React from "react";
import logo from "../images/logo.svg";
import github from "../images/github.svg";
import lightmode from "../images/light-mode.svg";
export default function Header() {
  return (
    <nav className="flex justify-between flex-row px-20 pt-5">
      <div className="logo">
        <img src={logo} alt="logo" srcset="" />
      </div>
      <div className="icons flex justify-between">
        <div className="icon px-10">
          <img src={github} alt="" srcset="" />
        </div>
        <div className="icon">
          <img src={lightmode} alt="" srcset="" />
        </div>
      </div>
    </nav>
  );
}
