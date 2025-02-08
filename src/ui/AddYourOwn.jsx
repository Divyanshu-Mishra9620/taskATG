import React from "react";
import { FaPlus } from "react-icons/fa";
import "./AddYourOwn.css";

export default function AddYourOwn() {
  return (
    <div className="add-your-own-container">
      <div className="add-your-own-card">
        <div className="icon-container">
          <FaPlus className="icon" />
        </div>

        <div className="content">
          <h2 className="title">Add your own</h2>
          <p className="description">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue, or event tickets? Or, do you know someone who should be on
            HobbyCue? Go ahead and add your own page.
          </p>
          <button className="add-button">Add new</button>
        </div>
      </div>
    </div>
  );
}
