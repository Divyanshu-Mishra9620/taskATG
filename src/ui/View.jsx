import React, { useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./View.css";

export default function View() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <ul className="navbar-nav d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 w-100">
      {/* Explore Dropdown */}
      <div className="dropdown-container">
        <button
          className="btn btn-sm dropdown-toggle d-flex align-items-center gap-1"
          onClick={() => toggleDropdown("explore")}
        >
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <ul
          className={`dropdown-menu-custom ${
            openDropdown === "explore" ? "show" : ""
          }`}
        >
          <li className="dropdown-item">e-1</li>
          <li className="dropdown-item">e-2</li>
          <li className="dropdown-item">e-3</li>
        </ul>
      </div>

      <div className="dropdown-container">
        <button
          className="btn btn-sm d-flex align-items-center gap-1"
          onClick={() => toggleDropdown("hobbies")}
        >
          <SportsEsportsIcon />
          <span>Hobbies</span>
        </button>
        <ul
          className={`dropdown-menu-custom ${
            openDropdown === "hobbies" ? "show" : ""
          }`}
        >
          <li className="dropdown-item">h-1</li>
          <li className="dropdown-item">h-2</li>
          <li className="dropdown-item">h-3</li>
        </ul>
      </div>

      <div className="d-flex justify-content-center gap-3 w-100 w-lg-auto">
        <BookmarkIcon fontSize="medium" />
        <NotificationsIcon fontSize="medium" />
        <ShoppingCartIcon fontSize="medium" />
        <AccountCircleIcon fontSize="medium" />
      </div>
    </ul>
  );
}
