import React from "react";
import styles from "./index.module.css";
import HeroHead from "@/components/common/hero-head";
import { Tab, Row, Col, Nav, Table, Image } from "react-bootstrap";
import EnquiryForm from "@/components/common/enquiry-form";

function JeePreparation() {
  return (
    <>
      <HeroHead
        title="JEE ADVANCE"
        subTitle="Major Kalshi Classes is the best coaching for JEE ADVANCE preparation"
        position="center"
      />
      <div className="section bg-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Tab.Container defaultActiveKey="overview">
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant="pills"
                      className="flex-row p-3 shadow-sm rounded bg-white"
                      fill
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="overview">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="course">Course</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="notifications">
                          Notifications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="syllabus">Syllabus</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fee-structure">
                          Fee Structure
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="colleges-seats">
                          Colleges & Seats
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="overview">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            JEE Advance Paper 1 Exam Pattern
                          </h4>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Section</th>
                                  <th>Type of Questions</th>
                                  <th>No. of Questions</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Section 1 </td>
                                  <td>MCQs with a single correct option</td>
                                  <td>6</td>
                                  <td>18</td>
                                </tr>
                                <tr>
                                  <td>Section 2 </td>
                                  <td>Single correct option</td>
                                  <td>6</td>
                                  <td>24</td>
                                </tr>
                                <tr>
                                  <td>Section 3 </td>
                                  <td>Numerical value answer</td>
                                  <td>6</td>
                                  <td>24</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            JEE Advance Paper 2 Exam Pattern
                          </h4>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Section</th>
                                  <th>Type of Questions</th>
                                  <th>No. of Questions</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Section 1 </td>
                                  <td>
                                    MCQs with one or more than one correct
                                    answer{" "}
                                  </td>
                                  <td>6</td>
                                  <td>24</td>
                                </tr>
                                <tr>
                                  <td>Section 2 </td>
                                  <td>Single-digit integer answer </td>
                                  <td>6</td>
                                  <td>24</td>
                                </tr>
                                <tr>
                                  <td>Section 3 </td>
                                  <td>Single-digit integer answer </td>
                                  <td>6</td>
                                  <td>18</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            JEE Advance Marking Scheme Paper 1
                          </h4>
                          <h5 className="fw-bold">Section 1</h5>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Single Correct Option</td>
                                  <td>6</td>
                                  <td>
                                    +3 if only the correct answer is selected
                                  </td>
                                  <td>-</td>
                                  <td>-1 (in all other cases)</td>
                                  <td>18</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h5 className="fw-bold">Section 2</h5>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>One ore more options is correct</td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected
                                  </td>
                                  <td>
                                    <div>
                                      <ul>
                                        <li>
                                          +3 if all four options are correct but
                                          only three options are chosen.
                                        </li>
                                        <li>
                                          +2 if three or more options are
                                          correct, but only two options are
                                          choosen,both of which are correct
                                          options.
                                        </li>
                                        <li>
                                          +1 if two or more options are correct,
                                          but only one option is choosen.
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                  <td>-2 (in all other cases)</td>
                                  <td>24</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h5 className="fw-bold">Section 3</h5>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Numerical Value Answer</td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected
                                  </td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>24</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            JEE Advance Marking Scheme Paper 2
                          </h4>
                          <h5 className="fw-bold">Section 1</h5>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    MCQs with 4 options(one or more than one
                                    correct option)
                                  </td>
                                  <td>6</td>
                                  <td>
                                    +4 if all the correct options are choosen
                                  </td>
                                  <td>
                                    <div>
                                      <ul>
                                        <li>
                                          +3 if all the options are correct
                                        </li>
                                        <li>
                                          +2 if three or more options are
                                          correct
                                        </li>
                                        <li>
                                          +1 if two or more options are correct
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                  <td>-2 (in all other cases)</td>
                                  <td>-</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h5 className="fw-bold">Section 2</h5>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Numerical Value answer type Questions</td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected
                                  </td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>24</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h5 className="fw-bold">Section 3</h5>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Single Digit integer answer</td>
                                  <td>6</td>
                                  <td>
                                    +3 if only the correct answer is selected
                                  </td>
                                  <td>-</td>
                                  <td>-1 in all other cases</td>
                                  <td>-1 in all other cases</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            Jee Advance Marking Scheme: Paper 1
                          </h4>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Section</th>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Single Correct Option </td>
                                  <td>6</td>
                                  <td>
                                    +3 if only the correct answer is selected
                                  </td>
                                  <td>-</td>
                                  <td>-1 (in all other cases) </td>
                                  <td>18</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>One or more option (s) is correct </td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected{" "}
                                  </td>
                                  <td>
                                    <ul>
                                      <li>
                                        +3 If all four options are correct, but
                                        only three options are chosen
                                      </li>
                                      <li>
                                        +2 If three or more options are correct,
                                        but only two options are chosen, both of
                                        the options must be correct
                                      </li>
                                      <li>
                                        +1 If two or more options are correct,
                                        but only one option is chosen, and it
                                        must be correct
                                      </li>
                                    </ul>
                                  </td>
                                  <td>-2 (in all other cases) </td>
                                  <td>24</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Numerical Value Answer </td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected{" "}
                                  </td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>24</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            Jee Advance Marking Scheme: Paper 2
                          </h4>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Section</th>
                                  <th>Question Type</th>
                                  <th>Total Questions</th>
                                  <th>Full Marks</th>
                                  <th>Partial Marks</th>
                                  <th>Negative Marks</th>
                                  <th>Maximum Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    MCQs with a options (one or more than one
                                    correct option)
                                  </td>
                                  <td>6</td>
                                  <td>
                                    +4 if only (all) the correct options are
                                    choosen{" "}
                                  </td>
                                  <td>
                                    <ul>
                                      <li>
                                        +3 If all four options are correct, but
                                        only three options are chosen
                                      </li>
                                      <li>
                                        +2 If three or more options are correct,
                                        but only two options are chosen, both of
                                        the options must be correct
                                      </li>
                                      <li>
                                        +1 If two or more options are correct,
                                        but only one option is chosen, and it
                                        must be correct
                                      </li>
                                    </ul>
                                  </td>
                                  <td>-2 (in all other cases) </td>
                                  <td>-</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    Numerical value answer type questions{" "}
                                  </td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected{" "}
                                  </td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>24</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Single digit integar answer (0-9) </td>
                                  <td>6</td>
                                  <td>
                                    +4 if only the correct answer is selected{" "}
                                  </td>
                                  <td>-</td>
                                  <td>-1 in all other cases </td>
                                  <td>18</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="course">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <h4 className="fw-bold">JEE(MAIN+ADVANCE)</h4>
                          <div className="content mt-2">
                            <p>
                              Our JEE(MAIN+Advanced) Classroom Course is Cover
                              Entire Syllabus as per standard of competition.
                              MKC Provide unique Teaching Methodology to Crack
                              the competition in prescribe Timeline. Our Entire
                              Team is dedicated and focus toward
                              JEE(MAIN+ADVANCE) Concept.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card shadow-sm bg-dark-light border-0 py-3 px-4 mt-3">
                              <h5 className="fw-bold text-center">
                                Foundation Course After Class X
                              </h5>
                              <div className="content">
                                <p className="mb-0 text-center">
                                  Duration: 2 years
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card shadow-sm bg-dark-light border-0 py-3 px-4 mt-3">
                              <h5 className="fw-bold text-center">
                                Foundation Course After Class XI
                              </h5>
                              <div className="content">
                                <p className="mb-0 text-center">
                                  Duration: 1 year
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card shadow-sm bg-dark-light border-0 py-3 px-4 mt-3">
                              <h5 className="fw-bold text-center">
                                Foundation Course After Class XII
                              </h5>
                              <div className="content">
                                <p className="mb-0 text-center">
                                  Duration: 1 year
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">MKC Unique Features</h4>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  Regular Classes
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">Regular Test</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  Study Material
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  Doubt Session
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  Revision Classes
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  Monthly Unit Test
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  All India Mock Test
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  CBT Lab Material
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card bg-light border-0 p-3 mt-3">
                                <p className="mb-0 text-center">
                                  Board Pattern Test
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">Fee Structure</h4>
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>CATEGORY</th>
                                  <th>REGISTRATION FEE</th>
                                  <th>DURATION</th>
                                  <th>ADMISSION FEE</th>
                                  <th>NET PAYABLE AMOUNT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Foundation</td>
                                  <td>525/-</td>
                                  <td>2 years</td>
                                  <td>1,60,000/-</td>
                                  <td>1,60,525/-</td>
                                </tr>
                                <tr>
                                  <td>Foundation</td>
                                  <td>525/-</td>
                                  <td>1 years</td>
                                  <td>80,000/-</td>
                                  <td>80,525/-</td>
                                </tr>
                                <tr>
                                  <td>Target/Dropper</td>
                                  <td>525/-</td>
                                  <td>1 years</td>
                                  <td>70,000/-</td>
                                  <td>70,525/-</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h6 className="fw-bold mb-3">
                            Note:- Additional Scholarship on the Basis of the
                            10th & 12th Result
                          </h6>
                          <div className="card px-3 py-2">
                            Board Marks (90% Above) - 20% Scholarship
                          </div>
                          <div className="card px-3 py-2 mt-3">
                            Board Marks (80% - 90%) - 10% Scholarship
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="notifications">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <h4 className="fw-bold">Schedule of Exam</h4>
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>EXAM</th>
                                  <th>NOTIFICATION</th>
                                  <th>EXAM DETAIL</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>JEE MAIN - (I)</td>
                                  <td>December</td>
                                  <td>JANUARY</td>
                                </tr>
                                <tr>
                                  <td>JEE MAIN - (II)</td>
                                  <td>FEBRUARY</td>
                                  <td>APRIL</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="syllabus">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <h4 className="fw-bold">Physics</h4>
                          <div className="content mt-2">
                            <Table bordered responsive>
                              <thead>
                                <tr>
                                  <td>#</td>
                                  <th>Syllabus for Class 11th</th>
                                  <th>Syllabus for Class 12th</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Physical World and Measurement</td>
                                  <td>Electrostatics</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Kinematics</td>
                                  <td>Current Electricity</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Laws of Motion</td>
                                  <td>
                                    Magnetic Effects of Current and Magnetism
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Work, Energy and Power</td>
                                  <td>
                                    Electromagnetic Induction andAlternating
                                    Currents
                                  </td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>
                                    Motion of System of Particles and RigidBody
                                  </td>
                                  <td>Electromagnetic Waves</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>Gravitation</td>
                                  <td>Optics</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>Properties of Bulk Matter</td>
                                  <td>Dual Nature of Matter and Radiation</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>Thermodynamics</td>
                                  <td>Atoms and Nuclei</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>
                                    Behaviour of Perfect Gas and KineticTheory
                                  </td>
                                  <td>Electronic Devices</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>Oscillations and Waves</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <h4 className="fw-bold">Chemistry</h4>
                          <div className="content mt-2">
                            <Table bordered responsive>
                              <thead>
                                <tr>
                                  <td>#</td>
                                  <th>Syllabus for Class 11th</th>
                                  <th>Syllabus for Class 12th</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Some Basic Concepts of Chemistry</td>
                                  <td>Solid State</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Structure of Atom</td>
                                  <td>Solutions</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    Classification of Elements and Periodicity
                                    in Properties
                                  </td>
                                  <td>Electrochemistry</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    Chemical Bonding and Molecular Structure
                                  </td>
                                  <td>Chemical Kinetics</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>States of Matter: Gases and Liquids</td>
                                  <td>Surface Chemistry</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>Thermodynamics</td>
                                  <td>
                                    General Principles and Processes of
                                    Isolation of Elements
                                  </td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>Equilibrium</td>
                                  <td>p-Block Elements</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>Redox ReactionsThermodynamics</td>
                                  <td>d-Block and f-Block Elements</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>Hydrogen</td>
                                  <td>Haloalkanes and Haloarenes</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>
                                    s-Block Element (Alkali and Alkaline earth
                                    metals)
                                  </td>
                                  <td>Alcohols, Phenols and Ethers</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>Some p-Block Elements</td>
                                  <td>
                                    Aldehydes, Ketones and Carboxylic Acids
                                  </td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>
                                    Organic Chemistry- Some Basic Principles and
                                    Techniques
                                  </td>
                                  <td>Organic Compounds Containing Nitrogen</td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>Hydrocarbons</td>
                                  <td>Biomolecules</td>
                                </tr>
                                <tr>
                                  <td>14</td>
                                  <td>Environmental Chemistry</td>
                                  <td>Polymers</td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td></td>
                                  <td>Chemistry in Everyday Life</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <h4 className="fw-bold">Mathematics</h4>
                          <div className="content mt-2">
                            <Table bordered responsive>
                              <thead>
                                <tr>
                                  <td>#</td>
                                  <th>Syllabus for Class 11th</th>
                                  <th>Syllabus for Class 12th</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Sets and Functions</td>
                                  <td>Relations and Functions</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Trigonometric Functions</td>
                                  <td>Inverse Trigonometric Functions</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Principle of Mathematical Induction</td>
                                  <td>Matrices</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    Complex Numbers and Quadratic Equations
                                  </td>
                                  <td>Determinants</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Linear Inequalities</td>
                                  <td>Continuity and Differentiability</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>Permutations and Combinations</td>
                                  <td>Application of Derivatives</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>Binomial Theorem</td>
                                  <td>Integrals</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>Sequences and Series</td>
                                  <td>Application of Integrals</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>Straight Lines</td>
                                  <td>Differential Equations</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>Conic Sections</td>
                                  <td>Vector Algebra</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>
                                    Introduction to Three-dimensional Geometry
                                  </td>
                                  <td>Three-dimensional Geometry</td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>Limits and Derivatives</td>
                                  <td>Linear Programming</td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>Mathematical Reasoning</td>
                                  <td>Probability</td>
                                </tr>
                                <tr>
                                  <td>14</td>
                                  <td>Statistics</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>Probability</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fee-structure">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">Fee Structure</h4>
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>CATEGORY</th>
                                  <th>REGISTRATION FEE</th>
                                  <th>DURATION</th>
                                  <th>ADMISSION FEE</th>
                                  <th>NET PAYABLE AMOUNT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Foundation</td>
                                  <td>525/-</td>
                                  <td>2 years</td>
                                  <td>1,60,000/-</td>
                                  <td>1,60,525/-</td>
                                </tr>
                                <tr>
                                  <td>Foundation</td>
                                  <td>525/-</td>
                                  <td>1 years</td>
                                  <td>80,000/-</td>
                                  <td>80,525/-</td>
                                </tr>
                                <tr>
                                  <td>Target/Dropper</td>
                                  <td>525/-</td>
                                  <td>1 years</td>
                                  <td>70,000/-</td>
                                  <td>70,525/-</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h6 className="fw-bold mb-3">
                            Note:- Additional Scholarship on the Basis of the
                            10th & 12th Result
                          </h6>
                          <div className="card px-3 py-2">
                            Board Marks (90% Above) - 20% Scholarship
                          </div>
                          <div className="card px-3 py-2 mt-3">
                            Board Marks (80% - 90%) - 10% Scholarship
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="colleges-seats">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            {"No. of ITT's & Available Seats"}
                          </h4>
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>Name</th>
                                  <th>Established</th>
                                  <th>STATE/UT</th>
                                  <th>No. of Seats</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>IIT Bombay</td>
                                  <td>1958</td>
                                  <td>Maharashtra</td>
                                  <td>929</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>IIT Delhi</td>
                                  <td>1961</td>
                                  <td>Delhi</td>
                                  <td>799</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>IIT Madras</td>
                                  <td>2012</td>
                                  <td>Tamil Nadu</td>
                                  <td>838</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>IIT Kanpur</td>
                                  <td>1959</td>
                                  <td>Uttar Pradesh</td>
                                  <td>1100</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>IIT Kharagpur</td>
                                  <td>1951</td>
                                  <td>West Bengal</td>
                                  <td>1360</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>IIT Roorkee</td>
                                  <td>1847</td>
                                  <td>Uttarakhand</td>
                                  <td>1160</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>IIT Guwahati</td>
                                  <td>1994</td>
                                  <td>Assam</td>
                                  <td>645</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>IIT Hyderabad</td>
                                  <td>2008</td>
                                  <td>Telangana</td>
                                  <td>294</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>IIT Gandhinagar</td>
                                  <td>2008</td>
                                  <td>Gujarat</td>
                                  <td>1000</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>IIT Ropar</td>
                                  <td>2008</td>
                                  <td>Punjab</td>
                                  <td>297</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>IIT Bhubaneswar</td>
                                  <td>2008</td>
                                  <td>Odisha</td>
                                  <td>350</td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>IIT Patna</td>
                                  <td>2008</td>
                                  <td>Bihar</td>
                                  <td>300</td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>IIT Jodhpur</td>
                                  <td>2008</td>
                                  <td>Rajasthan</td>
                                  <td>300</td>
                                </tr>
                                <tr>
                                  <td>14</td>
                                  <td>IIT Indore</td>
                                  <td>2009</td>
                                  <td>Madhya Pradesh</td>
                                  <td>260</td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>IIT Mandi</td>
                                  <td>2009</td>
                                  <td>Himachal Pradesh</td>
                                  <td>150</td>
                                </tr>
                                <tr>
                                  <td>16</td>
                                  <td>IIT Varanasi (BHU)</td>
                                  <td>2012</td>
                                  <td>Uttar Pradesh</td>
                                  <td>1090</td>
                                </tr>
                                <tr>
                                  <td>17</td>
                                  <td>IIT Dhanbad</td>
                                  <td>2016</td>
                                  <td>Jharkhand</td>
                                  <td>1012</td>
                                </tr>
                                <tr>
                                  <td>18</td>
                                  <td>IIT Bhilai</td>
                                  <td>2016</td>
                                  <td>Chhattisgarh</td>
                                  <td>120</td>
                                </tr>
                                <tr>
                                  <td>19</td>
                                  <td>IIT Goa</td>
                                  <td>2016</td>
                                  <td>Goa</td>
                                  <td>120</td>
                                </tr>
                                <tr>
                                  <td>20</td>
                                  <td>IIT Jammu</td>
                                  <td>2016</td>
                                  <td>Jammu and Kashmir</td>
                                  <td>90</td>
                                </tr>
                                <tr>
                                  <td>21</td>
                                  <td>IIT Dharwad</td>
                                  <td>2016</td>
                                  <td>Karnataka</td>
                                  <td>126</td>
                                </tr>
                                <tr>
                                  <td>22</td>
                                  <td>IIT Bhimavaram</td>
                                  <td>2021</td>
                                  <td>Andhra Pradesh</td>
                                  <td>120</td>
                                </tr>
                                <tr>
                                  <td>23</td>
                                  <td>IIT Tirupati</td>
                                  <td>2015</td>
                                  <td>Andhra Pradesh</td>
                                  <td>120</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">
                            {"No. of ITT's & Available Seats"}
                          </h4>
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>Name</th>
                                  <th>Established</th>
                                  <th>STATE/UT</th>
                                  <th>No. of Seats</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>NIT Tiruchirappalli</td>
                                  <td>1964</td>
                                  <td>Tamil Nadu</td>
                                  <td>3417</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>NIT Rourkela</td>
                                  <td>1961</td>
                                  <td>Odisha</td>
                                  <td>4917</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>NIT Surathkal</td>
                                  <td>1960</td>
                                  <td>Karnataka</td>
                                  <td>2612</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>NIT Warangal</td>
                                  <td>1959</td>
                                  <td>Telangana</td>
                                  <td>3100</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>NIT Calicut</td>
                                  <td>1961</td>
                                  <td>Kerala</td>
                                  <td>3622</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>NIT Kurukshetra</td>
                                  <td>1963</td>
                                  <td>Haryana</td>
                                  <td>1350</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>NIT Durgapur</td>
                                  <td>1960</td>
                                  <td>West Bengal</td>
                                  <td>1330</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>NIT Allahabad</td>
                                  <td>1961</td>
                                  <td>Uttar Pradesh</td>
                                  <td>1046</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>NIT Jaipur</td>
                                  <td>1963</td>
                                  <td>Rajasthan</td>
                                  <td>1300</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>NIT Jamshedpur</td>
                                  <td>1960</td>
                                  <td>Jharkhand</td>
                                  <td>1320</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>NIT Nagpur</td>
                                  <td>1960</td>
                                  <td>Maharashtra</td>
                                  <td>1570</td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>NIT Bhopal</td>
                                  <td>1960</td>
                                  <td>Madhya Pradesh</td>
                                  <td>1620</td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>NIT Jalandhar</td>
                                  <td>1987</td>
                                  <td>Punjab</td>
                                  <td>1230</td>
                                </tr>
                                <tr>
                                  <td>14</td>
                                  <td>NIT Silchar</td>
                                  <td>1967</td>
                                  <td>Assam</td>
                                  <td>1015</td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>NIT Hamirpur</td>
                                  <td>1986</td>
                                  <td>Himachal Pradesh</td>
                                  <td>1150</td>
                                </tr>
                                <tr>
                                  <td>16</td>
                                  <td>NIT Srinagar</td>
                                  <td>1960</td>
                                  <td>Jammu and Kashmir</td>
                                  <td>1030</td>
                                </tr>
                                <tr>
                                  <td>17</td>
                                  <td>NIT Meghalaya</td>
                                  <td>2010</td>
                                  <td>Meghalaya</td>
                                  <td>270</td>
                                </tr>
                                <tr>
                                  <td>18</td>
                                  <td>NIT Manipur</td>
                                  <td>2010</td>
                                  <td>Manipur</td>
                                  <td>430</td>
                                </tr>
                                <tr>
                                  <td>19</td>
                                  <td>NIT Mizoram</td>
                                  <td>2010</td>
                                  <td>Mizoram</td>
                                  <td>200</td>
                                </tr>
                                <tr>
                                  <td>20</td>
                                  <td>NIT Nagaland</td>
                                  <td>2010</td>
                                  <td>Nagaland</td>
                                  <td>200</td>
                                </tr>
                                <tr>
                                  <td>21</td>
                                  <td>NIT Arunachal Pradesh</td>
                                  <td>2010</td>
                                  <td>Arunachal Pradesh</td>
                                  <td>340</td>
                                </tr>
                                <tr>
                                  <td>22</td>
                                  <td>NIT Delhi</td>
                                  <td>2010</td>
                                  <td>Delhi</td>
                                  <td>1140</td>
                                </tr>
                                <tr>
                                  <td>23</td>
                                  <td>NIT Goa</td>
                                  <td>2010</td>
                                  <td>Goa</td>
                                  <td>340</td>
                                </tr>
                                <tr>
                                  <td>24</td>
                                  <td>NIT Puducherry</td>
                                  <td>2010</td>
                                  <td>Puducherry</td>
                                  <td>300</td>
                                </tr>
                                <tr>
                                  <td>25</td>
                                  <td>NIT Sikkim</td>
                                  <td>2010</td>
                                  <td>Sikkim</td>
                                  <td>300</td>
                                </tr>
                                <tr>
                                  <td>26</td>
                                  <td>NIT Uttarakhand</td>
                                  <td>2009</td>
                                  <td>Uttarakhand</td>
                                  <td>1020</td>
                                </tr>
                                <tr>
                                  <td>27</td>
                                  <td>NIT Andhra Pradesh</td>
                                  <td>2015</td>
                                  <td>Andhra Pradesh</td>
                                  <td>1080</td>
                                </tr>
                                <tr>
                                  <td>28</td>
                                  <td>NIT Agartala</td>
                                  <td>1965</td>
                                  <td>Tripura</td>
                                  <td>930</td>
                                </tr>
                                <tr>
                                  <td>29</td>
                                  <td>NIT Patna</td>
                                  <td>1886</td>
                                  <td>Bihar</td>
                                  <td>1180</td>
                                </tr>
                                <tr>
                                  <td>30</td>
                                  <td>NIT Raipur</td>
                                  <td>1956</td>
                                  <td>Chhattisgarh</td>
                                  <td>1050</td>
                                </tr>
                                <tr>
                                  <td>31</td>
                                  <td>NIT Jammu and Kashmir</td>
                                  <td>2010</td>
                                  <td>Jammu and Kashmir</td>
                                  <td>1080</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
            <div className="col-md-4 mt-lg-0  mt-sm-5">
              <div className="card shadow-sm border-0 py-3 px-3">
                <EnquiryForm
                  title="Enquiry Form"
                  buttonTitle="Send"
                  buttonClass="btn btn-primary w-100"
                />
              </div>
              <div className="mt-3">
                <Image
                  src="https://img.majorkalshiclasses.com/images/file_1683660348905.jpg"
                  className="img-fluid w-100"
                  rounded
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JeePreparation;
