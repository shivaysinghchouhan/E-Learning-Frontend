import React from "react";
import { Card, CardBody } from "reactstrap";
import "../styles/Header.css"; // import custom CSS for animation

const Header = () => {
  return (
    <header className="animated-header text-white shadow-sm py-4">
      <div className="container text-center">
        <h1 className="display-5 fw-bold animated-text">
          🚀 Programming Courses Application
        </h1>
        <p className="lead">
          Manage your courses easily. Add, update, and explore new learning opportunities.
        </p>
      </div>
    </header>
  );
};

export default Header;
