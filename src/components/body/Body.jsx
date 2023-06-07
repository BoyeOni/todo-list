import React from "react";
import "./Body.scss";

export default function Body() {
  return (
    <div className="listTodo">
      <div className="listTodo__row">
        <div className="listTodo__item">Do Coding Assignment</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__item">Work Out</div>
        <div className="listTodo__delete">Del</div>
      </div>

      <div className="listTodo__row">
        <div className="listTodo__item">Go For A Walk</div>
        <div className="listTodo__delete">Del</div>
      </div>
    </div>
  );
}
