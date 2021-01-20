import React from "react";
import { Container } from "reactstrap";
import Logo from "./about.jpg";
import "./About.module.css";

const About = () => {
  return (
    <section>
      <Container fluid>
        <div className="row">
          <div
            id="headingGroup"
            className="col-lg-6 px-5 pt-5 pt-lg-0 order-2 d-flex align-items-center"
          >
            <div>
              <h1 className="display-4 font-weight-bold">
                Fast, functional, attractive websites
              </h1>
              <p>
                Our team aims to create websites that inspire and empower all
                its users.
              </p>
              <div className="icon-box py-3">
                <div className="icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <h4 class="title">Mobile-First Design Principle</h4>
                <p>
                  Our websites are supported and responsive on all modern
                  devices.
                </p>
              </div>
              <div className="icon-box py-3">
                <div className="icon">
                  <i class="fas fa-wind"></i>
                </div>
                <h4 class="title">Efficient UI Design</h4>
                <p>
                  Our websites are built from scratch to provide an optimized
                  user experience.
                </p>
              </div>
              <div className="icon-box py-3">
                <div className="icon">
                  <i class="fas fa-sliders-h"></i>
                </div>
                <h4 class="title">Unlimited Customization</h4>
                <p>
                  Our websites are catered to the diverse requirements of each
                  client.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 py-lg-5 order-1 d-flex justify-content-center align-items-center hero-img">
            <img
              className="img-fluid"
              src={Logo}
              alt="Cache and Cookies Logo"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
