import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "#333" /* Background color for the navbar */,
  color: "white" /* Text color for the links */,
  padding: "1rem 0" /* Add padding to the top and bottom */,
};

const ulStyle = {
  listStyle: "none" /* Remove list bullets */,
  display: "flex" /* Display list items horizontally */,
  justifyContent: "center" /* Center the list items horizontally */,
};

const liStyle = {
  margin: "0 1rem" /* Add margin between list items */,
};

const linkStyle = {
  textDecoration: "none" /* Remove underlines */,
  color: "white" /* Text color for the links */,
  fontWeight: "bold" /* Make the text bold */,
  transition: "color 0.3s" /* Add a smooth color transition on hover */,
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>
            About Us
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/Contact-Form" style={linkStyle}>
            Discount
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
