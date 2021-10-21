import "./header.css";
import logo from "./../../logo.png";
import HeaderBg from "./../../assets/images/header-bg.png";
import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { contexts, selectedCourse } = useAuth();
  const { user, logOut } = contexts;
  const active = {
    color: "#ff136f",
    borderBottom: "2px solid #ff136f",
  };
  const navStyle = {
    textDecoration: "none",
    margin: "0 8px",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    textTransform: "Uppercase",
  };
  return (
    <div className="sticky-top">
      <Navbar className="text-dark bg-danger "
      >
        <Container>
          <NavLink
            className="hoverStyle text-decoration-none sm-mb-3"
            to="home"
          >
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="  text-center">
              <NavLink
                className="hoverStyle ms-2"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="hoverStyle ms-2"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="hoverStyle ms-2"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="hoverStyle ms-2"
                to="/contact"
              >
                Contact
              </NavLink>
              <div>
                <NavLink to="/cart" className="btn text-white">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <Badge bg="">{selectedCourse.length}</Badge>
                </NavLink>
              </div>
              {user.displayName ? (
                <div>
                  <NavDropdown
                    title={
                      <>
                        <img
                          style={{ width: "45px", borderRadius: "50%" }}
                          src={user.photoURL}
                          alt="profile"
                        />
                      </>
                    }
                  >
                    <div className="text-center">
                      <p>{user.displayName}</p>
                      <p>{user.email}</p>
                      <div className="text-center">
                        <button onClick={logOut} className="btn btn-primary">
                          Log Out
                        </button>
                      </div>
                    </div>
                  </NavDropdown>
                </div>
              ) : (
                <>
                  <NavLink
                    className="hoverStyle ms-2 "
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="hoverStyle ms-2"
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
