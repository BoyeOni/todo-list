import React from "react";
import "./Pending.scss";

export default function Pending() {
  return (
    <div className="pending">
      <input
        className="pending__input"
        type="text"
        placeholder="You have 3 pending tasks"
      />
      <button className="pending__button">Clear All</button>
    </div>
  );
}
