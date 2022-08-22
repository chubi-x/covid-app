import React from "react";
import Cases from "./totals/Cases";
import bed from "../images/bed.svg";
import dead from "../images/dead.svg";
import heart from "../images/heart.svg";
import mask from "../images/mask.svg";

import { CasesContext } from "../Helper/Context";
import { useContext } from "react";
export default function TotalStats() {
  const { data } = useContext(CasesContext);
  return (
    <>
      {data.map((data, index) => (
        <div key={index} className="container flex justify-between px-32 pt-10">
          <Cases
            title="Total Samples"
            number={data.totalSamplesTested}
            icon={heart}
          />
          <Cases
            title=" Confirmed Cases"
            number={data.totalConfirmedCases}
            icon={mask}
          />
          <Cases
            title="Total Active Cases"
            number={data.totalActiveCases}
            icon={bed}
          />
          <Cases
            title="Total Discharged"
            number={data.discharged}
            icon={heart}
          />
          <Cases title="Total Deaths" number={data.death} icon={dead} />
        </div>
      ))}
    </>
  );
}
