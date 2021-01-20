import React from "react";
import { Container } from "reactstrap";
import Hitea from "./hitea.png";
import Dlxc from "./dlxc.png";
import "./Clients.module.css";

const Clients = () => {
  return (
    <section>
      <Container fluid>
        <div className="row">
          <div
            id="headingGroup"
            className="col-lg-2 px-5 pt-5 pt-lg-0 order-1 d-flex align-items-center"
          >
            <div>
              <h1 className="display-4 font-weight-bold">Our Clients</h1>
              <p>
                Not convinced? See what our clients have to say about our work.
              </p>
            </div>
          </div>
          <div className="col-lg-5 px-5 py-lg-5 order-2 d-flex justify-content-center align-items-center hero-img">
            <img
              className="img-fluid"
              src={Hitea}
              alt="Cache and Cookies Logo"
            />
          </div>
          <div className="col-lg-5 px-5 py-lg-5 order-2 d-flex justify-content-center align-items-center hero-img">
            <img
              className="img-fluid"
              src={Dlxc}
              alt="Cache and Cookies Logo"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
