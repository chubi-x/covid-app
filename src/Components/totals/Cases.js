import React from "react";

export default function Cases({ title, number, icon }) {
  return (
    <div className="cases  px-2 pt-2 space-y-4">
      <div className="title flex justify-between">
        <h2 className="text-sm font-bold">{title}</h2>
        <img src={icon} alt="icon" className="w-auto" />
      </div>
      <div className="total">
        <h5>{number.toLocaleString()}</h5>
      </div>
    </div>
  );
}
