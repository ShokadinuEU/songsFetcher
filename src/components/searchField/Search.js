import React from "react";
import "./search.css";

export default function Input() {
  return (
    <div className="searchMain">
      <input className="searchInput" type="text" />
      <button className="searchButton">Go!</button>
    </div>
  );
}
