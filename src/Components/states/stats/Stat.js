import React from "react";
export default function Stat({ icon, value, title }) {
  return (
    <div className="stat flex items-center">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="title ml-1">
        <h5>{title}</h5>
        <h5 className="font-bold text-base">{value.toLocaleString()}</h5>
      </div>
    </div>
  );
}
