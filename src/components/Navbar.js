import React from "react";
import logo from "../images/memelogo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} width="70px" className="navbar-logo" />
      <h1 className="navbar-title">Meme Generator</h1>
      <h2 className="navbar-title-owner">Suyog Dhakal</h2>
    </nav>
  );
}
