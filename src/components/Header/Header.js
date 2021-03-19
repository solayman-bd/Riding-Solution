import React, { useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = (props) => {
  const fromDestination = props.fromDestination;

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser.name);
  return (
    <nav className="navbar navbar-expand-lg  rounded">
      <a className="navbar-brand mr-auto" href="">
        Riding Solution
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul className="navbar-nav ml-sm-2">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/destination" className="nav-link">
            Destination
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          {fromDestination ? (
            <Link to="/" className="nav-link mr-2">
              {loggedInUser.name}
            </Link>
          ) : (
            <Link to="/login" className="nav-link mr-2">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
