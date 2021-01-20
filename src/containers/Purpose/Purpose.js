import React from "react";
import { Container } from "reactstrap";
import Logo from "./purpose.jpg";
import "./Purpose.module.css";

const Purpose = () => {
  return (
    <section>
      <Container fluid>
        <div className="row">
          <div
            id="headingGroup"
            className="col-lg-7 px-5 pt-5 pt-lg-0 order-2 d-flex align-items-center"
          >
            <div>
              <h1 className="display-4 font-weight-bold">
                Professional services at a fraction of the price
              </h1>
              <p>
                Hiring mainstream options can be extremely expensive. The
                typical service costs upwards of $2,000 upfront, with an ongoing
                cost of $1,000 per year. We understand how this can be
                unaffordable for small businesses.
              </p>
              <p>
                <strong>
                  We offer our services for only $30 per month, with no upfront
                  costs.
                </strong>
              </p>
              <p>Our services include:</p>
              <ul>
                <i>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>
                    Analytics for monitoring website impact and effectiveness
                  </li>
                  <li>Highly personal and close collaboration with clients</li>
                  <li>Working with templates, or designing from scratch</li>
                </i>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 px-5 py-lg-5 order-1 d-flex justify-content-center align-items-center hero-img">
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

export default Purpose;
