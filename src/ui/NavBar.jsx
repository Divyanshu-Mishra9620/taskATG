import React, { useState } from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import View from "./View";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light px-2 px-md-3">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap">
        <div className="d-flex align-items-center flex-grow-1 gap-2 gap-md-3">
          <Logo />
          <SearchBox className="flex-grow-1" style={{ minWidth: "150px" }} />
        </div>

        <button
          className="btn d-lg-none"
          onClick={() => setToggle(!toggle)}
          style={{ minWidth: "40px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`offcanvas offcanvas-end ${toggle ? "show" : ""}`}
          style={{
            maxWidth: "280px",
            transform: toggle ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="offcanvas-header">
            <button
              className="btn-close"
              onClick={() => setToggle(false)}
            ></button>
          </div>
          <div className="offcanvas-body">
            <View />
          </div>
        </div>

        <div className="d-none d-lg-block">
          <View />
        </div>
      </div>
    </nav>
  );
}
