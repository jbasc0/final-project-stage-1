import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <img
        src={
          "https://images.unsplash.com/photo-1638613067237-b1127ef06c00?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="logo"
        className="header__logo"
      />
      <Navigation />
    </header>
  );
};
export default Header;
