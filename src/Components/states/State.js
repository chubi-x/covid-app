import React from "react";
import flag from "../../images/nigeria.png";
import Stats from "./Stats";
import { StatesContext } from "../../Helper/Context";
export default function State({
  state,
  confirmed,
  admission,
  discharged,
  deaths,
}) {
  return (
    <StatesContext.Provider
      value={{ confirmed, admission, discharged, deaths }}
    >
      <div className="state">
        <div className="heading flex justify-between px-5 pt-2">
          <div className="icon">
            <img src={flag} alt="flag" />
          </div>
          <div className="name">
            <h2 className="text-xl font-bold">{state}</h2>
          </div>
        </div>
        <Stats />
      </div>
    </StatesContext.Provider>
  );
}
