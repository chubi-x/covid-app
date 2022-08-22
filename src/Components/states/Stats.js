import React, { useContext } from "react";
import bed from "../../images/bed.svg";
import dead from "../../images/dead.svg";
import heart from "../../images/heart.svg";
import mask from "../../images/mask.svg";
import corona from "../../images/corona.svg";
import { StatesContext } from "../../Helper/Context";
import Stat from "./stats/Stat";

export default function Stats() {
  const { confirmed, admission, discharged, deaths } =
    useContext(StatesContext);
  return (
    <div className="stats flex flex-wrap pt-1 pl-1 gap-x-4 gap-y-4">
      <Stat title="Confirmed Cases" icon={mask} value={confirmed} />
      <Stat title="Admissions" icon={bed} value={admission} />
      <Stat title="Discharged Cases" icon={heart} value={discharged} />
      <Stat title="Deaths" icon={dead} value={deaths} />
    </div>
  );
}
