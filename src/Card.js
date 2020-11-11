import React from "react";
import "./Card.css";

export default function Card({ title, content }) {
  return (
    <div className="Card">
      <button type="button">Delete</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
