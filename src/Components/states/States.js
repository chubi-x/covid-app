import React from "react";
import State from "./State";
import { CasesContext } from "../../Helper/Context";
import { useContext } from "react";
export default function States() {
  const { states } = useContext(CasesContext);
  return (
    <div className="states flex flex-wrap justify-between gap-y-10 pt-4 md:px-2">
      {states.map((state) => (
        <State
          key={state._id}
          state={state.state}
          confirmed={state.confirmedCases}
          admission={state.casesOnAdmission}
          discharged={state.discharged}
          deaths={state.death}
        />
      ))}
    </div>
  );
}
