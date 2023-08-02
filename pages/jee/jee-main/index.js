import React from "react";
import styles from "./index.module.css";
import HeroHead from "@/components/common/hero-head";
import { Tab, Row, Col, Nav, Table, Image } from "react-bootstrap";
import EnquiryForm from "@/components/common/enquiry-form";

function JeePreparation() {
  return (
    <>
      <HeroHead
        title="JEE MAIN"
        subTitle="Major Kalshi Classes is the best coaching for JEE MAIN preparation"
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
                              To be eligible for JEE (Main), candidates must
                              fulfill certain criteria as outlined by the
                              official conducting body. As per the article JEE
                              Main Eligibility Criteria, candidates must have
                              passed their 10+2 examination or its equivalent in
                              the Science stream. Additionally, they should have
                              studied Physics, Mathematics, and Chemistry as
                              compulsory subjects during their qualifying
                              examination. It is important to note that there is
                              no minimum percentage requirement for appearing in
                              JEE (Main), but candidates must obtain a certain
                              minimum score in their qualifying examination
                              based on their respective category. Furthermore,
                              candidates who have completed their 12th
                              examination in 2019, 2020, or are appearing in
                              2021 are eligible to apply for the exam.
                              Candidates must also be born on or after October
                              1, 1998, while there is a relaxation of five years
                              for candidates belonging to SC, ST, and PwD
                              categories. These eligibility criteria are crucial
                              to determine whether a candidate can participate
                              in the JEE (Main) examination, which serves as a
                              gateway for admission to various undergraduate
                              engineering programs across prestigious
                              institutions in India.
                            </p>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">Exam Scheme</h4>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Paper</th>
                                  <th>Subjects</th>
                                  <th>Type of Questions</th>
                                  <th>Mode of Examination</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Paper 1: B.E/B.Tech</td>
                                  <td>
                                    Mathematics
                                    <br />
                                    Physics
                                    <br />
                                    Chemistry
                                  </td>
                                  <td>
                                    Objective Type Multiple Choice Questions
                                    (MCQs) and Questions for which the answer is
                                    a numerical value, with equal weightage to
                                    Mathematics, Physics, and Chemistry
                                  </td>
                                  <td>Computer Based Test (CBT) mode only</td>
                                </tr>
                                <tr>
                                  <td>Paper 2A: B. Arch</td>
                                  <td>
                                    Part-I: Mathematics
                                    <br />
                                    Part-II: Aptitude Test
                                    <br />
                                    Part-III: Drawing Test
                                  </td>
                                  <td>
                                    Part-I: Objective Type Multiple Choice
                                    Questions (MCQ) and Questions for which the
                                    answer is a numerical value
                                    <br />
                                    Part-II: Objective Type Multiple Choice
                                    Questions (MCQs)
                                    <br />
                                    Part-III: Questions to test drawing Pen and
                                    Paper Based (offline) mode to be
                                  </td>
                                  <td>
                                    Part-I: Computer Based Test (CBT) mode only
                                    <br />
                                    Part-II: Computer Based Test (CBT) mode only
                                    <br />
                                    Part-III: Pen and Paper Based (offline) mode
                                    to be attempted on a Drawing sheet of A4
                                    size
                                  </td>
                                </tr>
                                <tr>
                                  <td>Paper 28: B. Planning</td>
                                  <td>
                                    Part-I: Mathematics
                                    <br />
                                    Part-II: Aptitude Test
                                    <br />
                                    Part-III: Planning-Based
                                    <br />
                                    Questions
                                  </td>
                                  <td>
                                    Part-I: Objective Type Multiple Choice
                                    Questions (MCQ) and Questions for which the
                                    answer is a numerical value
                                    <br />
                                    Part-II: Objective Type Multiple Choice
                                    Questions (MCQs)
                                    <br />
                                    Part-III: Objective Type Multiple Choice
                                    Questions (MCQs)
                                  </td>
                                  <td>
                                    Part-I: Computer Based Test (CBT) mode only
                                    <br />
                                    Part-II: Computer Based Test (CBT) mode only
                                    <br />
                                    Part-III: Computer Based Test (CBT) mode
                                    only
                                    <br />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                          <h4 className="fw-bold">Exam Pattern</h4>
                          <div className="content mt-2">
                            <Table striped bordered responsive>
                              <thead>
                                <tr>
                                  <th>Subject</th>
                                  <th>Section A</th>
                                  <th>Section B</th>
                                  <th>Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Mathematics</td>
                                  <td>20*</td>
                                  <td>10*</td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <td>Physics</td>
                                  <td>20*</td>
                                  <td>10*</td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <td>Chemistry</td>
                                  <td>20*</td>
                                  <td>10*</td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <th colSpan={3} className="text-center">
                                    90
                                  </th>
                                  <th>300</th>
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
