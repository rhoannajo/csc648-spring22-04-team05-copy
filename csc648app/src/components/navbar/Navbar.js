import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import OnTask from "./OnTask-Logo.png";
import ProfileIcon from "./profileicon.png";

const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">
            {" "}
            <img src={OnTask} />{" "}
          </Link>
        </li>
        <li>
          <input type="text" placeholder="Search" className="search" />
        </li>
        <li>
          <Link to="/login" className="profileicon">
            <img src={ProfileIcon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
