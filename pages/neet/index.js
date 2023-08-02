import React from "react";
import styles from "./index.module.css";
import HeroHead from "@/components/common/hero-head";
import { Tab, Row, Col, Nav, Table, Image } from "react-bootstrap";
import EnquiryForm from "@/components/common/enquiry-form";

function JeePreparation() {
  return (
    <>
      <HeroHead
        title="NEET (UG)"
        subTitle="Major Kalshi Classes is the best coaching for NEET preparation"
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
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <div className="content mt-2">
                            <p>
                              The primary eligibility criteria required to sit
                              in NEET UG 2024.The minimum age requirement to
                              appear 17 years during admission or before
                              December 31, 2024. Therefore, students born on or
                              after December 31, 2006, upper age limit for
                              General category candidates is 25 years, and for
                              other categories, it is 30 years.Applicants must
                              have passed Class 12 in PCB and English from a
                              recognised board with a minimum of 50% marks,
                              while 40% for OBC/SC/ST should be Indian
                              Nationals, NRIS, OCIS, PIOS or Foreign Nationals.
                              categories.Students in NEET 2024 is are eligible.
                              The of the general category it is 45% for PWD and
                              40% for OBC/SC/ST categories. Students should be
                              Indian Nationals,NRIs,OCIs, PIOs or Foreign
                              Nationals.
                            </p>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">Exam Pattern Overview</h4>
                          <div className="content mt-2">
                            <p>NEET(UG) exam pattern is given below :</p>
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>Particulars</th>
                                  <th>Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Exam Mode</td>
                                  <td>offline</td>
                                </tr>
                                <tr>
                                  <td>Exam Duration</td>
                                  <td>3 hours 20 minutes</td>
                                </tr>
                                <tr>
                                  <td>Question paper type</td>
                                  <td>Multiple Choice Question (MCQs)</td>
                                </tr>
                                <tr>
                                  <td>
                                    Total number of questions that will be asked
                                  </td>
                                  <td>
                                    200 (180 applicable questions for attempt)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Total Marks</td>
                                  <td>720</td>
                                </tr>
                                <tr>
                                  <td>Negative Marking</td>
                                  <td>Yes</td>
                                </tr>
                                <tr>
                                  <td>Marking Scheme</td>
                                  <td>
                                    <ul>
                                      <li>+4 for each correct answer</li>
                                      <li>-1 for each incorrect answer</li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Total section in the question paper</td>
                                  <td>
                                    <ul>
                                      <li>3 (Two Section for each subject)</li>
                                      <li>Section A - 35 questions</li>
                                      <li>
                                        Section B - 15 questions (10 to be
                                        attempted)
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Subjects </td>
                                  <td>
                                    Physics, Chemistry and Biology (Botany +
                                    Zoology)
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">Latest Exam Pattern</h4>
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>Subjects</th>
                                  <th>Sections</th>
                                  <th>Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Physics</td>
                                  <td>
                                    <div>Section A: 35 questions</div>
                                    <div>Section B: 15 questions</div>
                                  </td>
                                  <td>
                                    <div>Section A: 140</div>
                                    <div>Section B: 40</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Chemistry</td>
                                  <td>
                                    <div>Section A: 35 questions</div>
                                    <div>Section B: 15 questions</div>
                                  </td>
                                  <td>
                                    <div>Section A: 140</div>
                                    <div>Section B: 40</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Botany</td>
                                  <td>
                                    <div>Section A: 35 questions</div>
                                    <div>Section B: 15 questions</div>
                                  </td>
                                  <td>
                                    <div>Section A: 140</div>
                                    <div>Section B: 40</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Zoology</td>
                                  <td>
                                    <div>Section A: 35 questions</div>
                                    <div>Section B: 15 questions</div>
                                  </td>
                                  <td>
                                    <div>Section A: 140</div>
                                    <div>Section B: 40</div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">NEET Marking Scheme</h4>
                          <div className="content mt-2">
                            <ul className="p-0">
                              <li>
                                - Every question in the NEET UG will carry 4
                                marks
                              </li>
                              <li>- Each correct answer will fetch 4 marks</li>
                              <li>
                                - For each incorrect response, there will be a
                                one-mark deduction
                              </li>
                              <li>
                                - If there is more than one correct answer to a
                                question, then all/any one will be considered
                                correct
                              </li>
                              <li>
                                - Any un-attempted or unanswered question will
                                not receive any marks
                              </li>
                              <li>
                                - Candidates will be awarded 4 marks in case a
                                question is dropped, irrespective of whether the
                                question was attempted or not
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="course">
                        <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                          <h4 className="fw-bold">NEET(UG)</h4>
                          <div className="content mt-2">
                            <p>
                              Our NEET(UG) Classroom Course is Cover Entire
                              Syllabus as per standard of competition. MKC
                              Provide unique Teaching Methodology to Crack the
                              competition in prescribe Timeline. Our Entire Team
                              is dedicated and focus toward NEET(UG) Concept.
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
                                  <td>NEET(UG)</td>
                                  <td>December</td>
                                  <td>April</td>
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
                          <h4 className="fw-bold">Biology</h4>
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
                                  <td>Diversity in Living World</td>
                                  <td>Reproduction</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    Structural Organisation in Animals and
                                    Plants
                                  </td>
                                  <td>Genetics and Evolution</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Cell Structure and Function</td>
                                  <td>Biology and Human Welfare</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Plant Physiology</td>
                                  <td>Biotechnology and Its Applications</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Human physiology</td>
                                  <td>Ecology and environment</td>
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
                          <div className="content mt-2">
                            <Table striped="columns" bordered responsive>
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>Name</th>
                                  <th>Established</th>
                                  <th>STATE/UT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>AllMS New Delhi</td>
                                  <td>1956</td>
                                  <td>Delhi</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>AIIMS Bhopal</td>
                                  <td>2012</td>
                                  <td>Madhya Pradesh</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>AIIMS Bhubaneswar</td>
                                  <td>2012</td>
                                  <td>Odisha</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>AIIMS Jodhpur</td>
                                  <td>2012</td>
                                  <td>Rajasthan</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>AIIMS Patna</td>
                                  <td>2012</td>
                                  <td>Bihar</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>AIIMS Raipur</td>
                                  <td>2012</td>
                                  <td>Chhattisgarh</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>AIIMS Rishikesh</td>
                                  <td>2012</td>
                                  <td>Uttarakhand</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>AIIMS Rae Bareli</td>
                                  <td>2018</td>
                                  <td>Uttar Pradesh</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>AIIMS Mangalagiri</td>
                                  <td>2018</td>
                                  <td>Andhra Pradesh</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>AIIMS Nagpur</td>
                                  <td>2018</td>
                                  <td>Maharashtra</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>AIIMS Gorakhpur</td>
                                  <td>2019</td>
                                  <td>Uttar Pradesh</td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>AIIMS Kalyani</td>
                                  <td>2019</td>
                                  <td>West Bengal</td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>AIIMS Bathinda</td>
                                  <td>2019</td>
                                  <td>Punjab</td>
                                </tr>
                                <tr>
                                  <td>14</td>
                                  <td>AIIMS Guwahati</td>
                                  <td>2020</td>
                                  <td>Assam</td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>AIIMS Vijaypur</td>
                                  <td>2020</td>
                                  <td>Jammu and Kashmir</td>
                                </tr>
                                <tr>
                                  <td>16</td>
                                  <td>AIIMS Bilaspur</td>
                                  <td>2020</td>
                                  <td>Himachal Pradesh</td>
                                </tr>
                                <tr>
                                  <td>17</td>
                                  <td>AIIMS Madurai</td>
                                  <td>2021</td>
                                  <td>Tamil Nadu</td>
                                </tr>
                                <tr>
                                  <td>18</td>
                                  <td>AIIMS Deoghar</td>
                                  <td>2019</td>
                                  <td>Jharkhand</td>
                                </tr>
                                <tr>
                                  <td>19</td>
                                  <td>AIIMS Rajkot</td>
                                  <td>2020</td>
                                  <td>Gujarat</td>
                                </tr>
                                <tr>
                                  <td>20</td>
                                  <td>AIIMS Bibinagar</td>
                                  <td>2019</td>
                                  <td>Telegana</td>
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
            <div className="col-md-4">
              <div className="card shadow-sm border-0 py-3 px-3">
                <EnquiryForm
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
