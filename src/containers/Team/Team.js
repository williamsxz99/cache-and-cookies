import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Oren from "./oren.jfif";
import "./Team.module.css";

const Purpose = () => {
  return (
    <section>
      <Container fluid className="p-5">
        <h1 className="display-4 font-weight-bold">Our Team</h1>
        <div className="d-inline-flex flex-row justify-content-between">
          <Card className="col-2 text-center">
            <CardImg top width="100%" src={Oren} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Charles Liu</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Founder/CEO, Fullstack
              </CardSubtitle>
              <div className="social d-inline-flex justify-content-center">
                <a href="https://www.github.com">
                  <i class="fab fa-github fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fab fa-linkedin-in fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fas fa-envelope-square fa-2x px-2"></i>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card className="col-2 text-center">
            <CardImg top width="100%" src={Oren} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Jimmy Yang</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Fullstack
              </CardSubtitle>
              <div className="social d-inline-flex justify-content-center">
                <a href="https://www.github.com">
                  <i class="fab fa-github fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fab fa-linkedin-in fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fas fa-envelope-square fa-2x px-2"></i>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card className="col-2 text-center">
            <CardImg top width="100%" src={Oren} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Oren Leung</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Fullstack, DevOps
              </CardSubtitle>
              <div className="social d-inline-flex justify-content-center">
                <a href="https://www.github.com">
                  <i class="fab fa-github fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fab fa-linkedin-in fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fas fa-envelope-square fa-2x px-2"></i>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card className="col-2 text-center">
            <CardImg top width="100%" src={Oren} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">William Shi</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Frontend, UX/UI Design
              </CardSubtitle>
              <div className="social d-inline-flex justify-content-center">
                <a href="https://www.github.com">
                  <i class="fab fa-github fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fab fa-linkedin-in fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fas fa-envelope-square fa-2x px-2"></i>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card className="col-2 text-center">
            <CardImg top width="100%" src={Oren} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Philip Chen</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Frontend
              </CardSubtitle>
              <div className="social d-inline-flex justify-content-center">
                <a href="https://www.github.com">
                  <i class="fab fa-github fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fab fa-linkedin-in fa-2x px-2"></i>
                </a>
                <a href="https://www.github.com">
                  <i class="fas fa-envelope-square fa-2x px-2"></i>
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Purpose;
