import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPlusCircle,
  FaList,
  FaInfoCircle,
  FaPhone,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Menus.css";

const Menus = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `menu-link ${isActive ? "active" : ""}`
        }
      >
        <FaHome className="menu-icon" />
        <span className="menu-text">Home</span>
      </NavLink>

      <NavLink
        to="/add-course"
        className={({ isActive }) =>
          `menu-link ${isActive ? "active" : ""}`
        }
      >
        <FaPlusCircle className="menu-icon" />
        <span className="menu-text">Add Course</span>
      </NavLink>

      <NavLink
        to="/view-courses"
        className={({ isActive }) =>
          `menu-link ${isActive ? "active" : ""}`
        }
      >
        <FaList className="menu-icon" />
        <span className="menu-text">View Courses</span>
      </NavLink>

      <NavLink
        to="/view-about"
        className={({ isActive }) =>
          `menu-link ${isActive ? "active" : ""}`
        }
      >
        <FaInfoCircle className="menu-icon" />
        <span className="menu-text">About</span>
      </NavLink>

      <NavLink
        to="/view-contact"
        className={({ isActive }) =>
          `menu-link ${isActive ? "active" : ""}`
        }
      >
        <FaPhone className="menu-icon" />
        <span className="menu-text">Contact Us</span>
      </NavLink>

      <NavLink
        to="/logout"
        className="menu-link logout"
      >
        <FaSignOutAlt className="menu-icon" />
        <span className="menu-text">Logout</span>
      </NavLink>
    </div>
  );
};

export default Menus;
