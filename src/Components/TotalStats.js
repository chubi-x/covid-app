import React from "react";
import Cases from "./totals/Cases";
import corona from "../images/corona.svg";
import bed from "../images/bed.svg";
import dead from "../images/dead.svg";
import heart from "../images/heart.svg";
import mask from "../images/mask.svg";

export default function TotalStats() {
  return (
    <div className="container flex justify-between px-24 pt-10">
      <Cases title="Total Samples" number={0} icon={heart} />
      <Cases title=" Confirmed Cases" number={0} icon={mask} />
      <Cases title="Total Active Cases" number={0} icon={bed} />
      <Cases title="Total Discharged" number={0} icon={heart} />
      <Cases title="Total Deaths" number={0} icon={dead} />
    </div>
  );
}
