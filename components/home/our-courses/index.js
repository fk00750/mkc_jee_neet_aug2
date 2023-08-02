import SectionHead from "@/components/common/section-head";
import React from "react";
import { Nav, Row, Col, Tab, Button } from "react-bootstrap";
import styles from "./index.module.css";

function OurCourses() {
  return (
    <div className="section">
      <div className="container">
        <Tab.Container defaultActiveKey="neet">
          <Row>
            <Col sm={7}>
              <SectionHead
                subTitle="Explore Our Courses"
                title="What Courses We Offer"
              />
            </Col>
            <Col sm={5}>
              <Nav className={styles.custom_nav}>
                <Nav.Item>
                  <Nav.Link eventKey="neet">NEET</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="jee">JEE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="foundation">PRE-FOUNDATION</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="neet" className="mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div class="card h-100">
                        <img
                          class="card-img-top"
                          src="https://img.majorkalshiclasses.com/images/file_1689174972689.jpeg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title fw-bold">Physics</h5>
                          <p class="card-text text-secondary">
                            Physics is a critical component of the NEET exam,
                            accounting for 25% of the total score. Students must
                            have a thorough understanding of physics to be
                            successful.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3">
                      <div class="card h-100">
                        <img
                          class="card-img-top"
                          src="https://img.majorkalshiclasses.com/images/file_1689174896595.jpeg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title fw-bold">Chemistry</h5>
                          <p class="card-text text-secondary">
                            Chemistry is a major subject in NEET, accounting for
                            25% of the total marks. Students must have a strong
                            understanding of chemistry to succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3">
                      <div class="card h-100">
                        <img
                          class="card-img-top"
                          src="https://img.majorkalshiclasses.com/images/file_1689175147932.jpeg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title fw-bold">Biology</h5>
                          <p class="card-text text-secondary">
                            Biology is one of the three subjects in NEET,
                            accounting for 50% of the marks. Students need a
                            strong understanding of biology to succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="jee" className="mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div class="card h-100">
                        <img
                          class="card-img-top"
                          src="https://img.majorkalshiclasses.com/images/file_1689174972689.jpeg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title fw-bold">Physics</h5>
                          <p class="card-text text-secondary">
                            Physics is a critical component of the NEET exam,
                            accounting for 25% of the total score. Students must
                            have a thorough understanding of physics to be
                            successful.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3">
                      <div class="card h-100">
                        <img
                          class="card-img-top"
                          src="https://img.majorkalshiclasses.com/images/file_1689174896595.jpeg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title fw-bold">Chemistry</h5>
                          <p class="card-text text-secondary">
                            Chemistry is a major subject in NEET, accounting for
                            25% of the total marks. Students must have a strong
                            understanding of chemistry to succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3">
                      <div class="card h-100">
                        <img
                          class="card-img-top"
                          src="https://img.majorkalshiclasses.com/images/file_1689175335720.jpeg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title fw-bold">Mathematics</h5>
                          <p class="card-text text-secondary">
                            Mathematics is a vital part of the JEE exam,
                            accounting for 35% of the total marks. Students need
                            a strong understanding of math to succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="foundation" className="mt-5">
                  <div className="card border-0 bg-light p-5">
                    <h4 className="text-center fw-bold">
                      Pre-Foundation Program
                    </h4>
                    <p className="text-center">
                      Get ready for NEET & JEE exams in Class 9 and 10 with our
                      comprehensive Pre-Foundation Program.
                    </p>
                    <div className="mt-3 d-flex align-items-center justify-content-center">
                      <Button variant="dark" className="py-3 px-5 fw-bold">
                        APPLY NOW
                      </Button>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default OurCourses;
