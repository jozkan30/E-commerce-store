import React from "react";
import "./filters.css";

export default function Filters(props) {
  return (
    <div className="filters">
      <button className="buttons"> {props.category}</button>
    </div>
  );
}
