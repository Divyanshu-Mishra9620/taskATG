import React from "react";
import "./End.css";

export default function End() {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">
        Your <span className="italic-text">Hobby</span>, Your{" "}
        <span className="blue-text">Community</span>...
      </h1>
      <button className="get-started">Get started</button>
      <div className="illustrations">
        <img src="/hobby.png" alt="Hobby Illustrations" />
      </div>
    </div>
  );
}
