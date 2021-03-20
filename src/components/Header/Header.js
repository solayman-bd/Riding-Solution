import React, { useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
  const fromDestination = props.fromDestination;

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>Riding Solution</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>

          <Nav.Link as={Link} to={"/home"}>
            Destination
          </Nav.Link>

          <Nav.Link as={Link} to={"/blog"}>
            Blog
          </Nav.Link>

          <Nav.Link as={Link} to={"/contact"}>
            Contact
          </Nav.Link>

          {fromDestination ? (
            <Nav.Link as={Link} to={"/"} className="mr-2">
              {loggedInUser.name}
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to={"/home"} className="nav-link mr-2">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
