import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./footer.css";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import FooterBG from "./../../assets/images/footer-bg.png";

library.add(
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faFacebookF,
  faYoutube,
  faLinkedin
);
const Footer = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "2px solid transparent",
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "inline-block",
  };
  return (
    <div
      className="bg-dark"
    >
      <Container>
        <Row>
          <Col>
            <ul className="list-unstyled mt-3 w-100">
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faMapMarkerAlt}
                />{" "}
                Satkhira, Khulna, Bangladesh
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faEnvelope}
                />{" "}
                Official: shaharershawn57@gmail.com
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2 social-icon" icon={faPhone} />{" "}
                Helpline: 01706041258
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/contact">
                  Contact us
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/courses">
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/policy">
                  Policy
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr className="mt-2 mb-0 bg-white" />
    </div>
  );
};

export default Footer;
