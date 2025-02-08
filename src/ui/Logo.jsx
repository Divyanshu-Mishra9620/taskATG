import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-container d-flex align-items-center gap-2">
      <img src="./hcue.png" alt="Hobby Cue Logo" className="logo-small" />

      <img
        src="./hobbycue.png"
        alt="Hobby Cue Text Logo"
        className="logo-text"
      />
    </div>
  );
}
