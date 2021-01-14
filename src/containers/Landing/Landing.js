import React from "react";
import { Container } from "reactstrap";
import Logo from "../../logo.svg";
import "./Landing.module.css";

const Landing = () => {
  return (
    <Container fluid>
      <div className="row">
        <div
          id="headingGroup"
          className="col-lg-7 px-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center"
        >
          <div>
            <h1 className="display-1 font-weight-bold">Cache and Cookies</h1>
            <h3>A-Z Website Design, Development, and Mastering</h3>
          </div>
        </div>
        <div className="col-lg-5 px-5 order-1 order-lg-2 align-items-center">
          <img fluid src={Logo} alt="Cache and Cookies Logo" />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
