import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home{" "}
      </Link>
      <Link style={linkStyle1} to="/About">
        {"    "}
        About
      </Link>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
const linkStyle = {
  color: "#eff",
  textDecoration: "none"
};
const linkStyle1 = {
  color: "#ffe",
  textDecoration: "none"
};
export default Header;
