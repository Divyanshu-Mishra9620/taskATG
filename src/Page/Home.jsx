import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../ui/Main";
import NavBar from "../ui/NavBar";
import ScrollTop from "../ui/ScrollTop";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <ScrollTop />
    </div>
  );
}
