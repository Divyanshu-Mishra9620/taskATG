import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  return (
    <form className="searchbox-container d-flex justify-content-center">
      <div className="input-group" style={{ width: "100%" }}>
        <input
          className="form-control border-start-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            height: "40px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderWidth: "1px",
          }}
        />
        <span className="input-group-text bg-white border-end-0">
          <SearchIcon style={{ color: "gray" }} />
        </span>
      </div>
    </form>
  );
}
