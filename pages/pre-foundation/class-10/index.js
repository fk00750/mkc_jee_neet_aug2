import React from "react";
import styles from "./index.module.css";
import HeroHead from "@/components/common/hero-head";
import { Tab, Row, Col, Nav, Table, Image } from "react-bootstrap";
import EnquiryForm from "@/components/common/enquiry-form";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { GiWhiteBook } from "react-icons/gi";


function PreFoundationPreparation() {
  return (
    <>
      <HeroHead
        title="PRE - FOUNDATION (CLASS 10)"
        subTitle="Major Kalshi Classes is the best coaching for PRE-FOUNDATION preparation"
        position="center"
      />
      <div className="section bg-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                <h4 className="fw-bold">COURSE OVERVIEW</h4>
                <div className="content mt-2">
                  <p>
                    Pre Foundation 10th (JEE NEET) is a course that aims to
                    provide students with a strong foundation in the subjects
                    they will need to excel in the JEE and NEET exams. The
                    course covers all the essential topics in mathematics,
                    physics, and chemistry, and it also includes practice
                    problems and mock tests to help students prepare for the
                    exams.
                  </p>
                </div>
              </div>
              <div className="card shadow-sm border-0 py-3 px-4 mt-4">
                <h4 className="fw-bold">MKC PRE FOUNDATION FEATURES</h4>
                <div className="content mt-2">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className={styles.about_features}>
                        <div className={styles.ab_icon}>
                          <FaChalkboardTeacher size={32} color="#fff" />
                        </div>
                        <div className={styles.ab_info}>
                          <h4>Experienced Teachers</h4>
                          <p>
                            Our experienced, expert teachers are passionate
                            about helping students succeed. They're highly
                            qualified and always looking for new ways to engage
                            and inspire.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.about_features}>
                        <div className={styles.ab_icon}>
                          <SiGoogleclassroom size={32} color="#fff" />
                        </div>
                        <div className={styles.ab_info}>
                          <h4>Digital Classrooms</h4>
                          <p>
                            Digital classrooms have many benefits for students,
                            digital classrooms are more accessible,
                            personalized, and effective than traditional
                            schools. They can reach students in remote areas,
                            adapt to individual needs, track progress, and use
                            multimedia.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.about_features}>
                        <div className={styles.ab_icon}>
                          <GiWhiteBook size={32} color="#fff" />
                        </div>
                        <div className={styles.ab_info}>
                          <h4>Latest Study Materials</h4>
                          <p>
                            We offer the latest study materials to the students
                            which are helpful in better learning. Our study
                            materials are designed by experts in the field and
                            are updated regularly to ensure that they are
                            up-to-date with the latest trends and developments.
                            Our study materials are also available in a variety
                            of formats, including e-books, PDFs, and online
                            courses, so that students can access them in the way
                            that best suits them.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.about_features}>
                        <div className={styles.ab_icon}>
                          <VscFeedback size={32} color="#fff" />
                        </div>
                        <div className={styles.ab_info}>
                          <h4>Regular Tests and Feedback</h4>
                          <p>
                            Digital classrooms have many benefits for students,
                            digital classrooms are more accessible,
                            personalized, and effective than traditional
                            schools. They can reach students in remote areas,
                            adapt to individual needs, track progress, and use
                            multimedia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                <h4 className="fw-bold">SYLLABUS CLASS 10</h4>
                <div className="content mt-2">
                  <Table striped bordered responsive>
                    <tbody>
                      <tr>
                        <td>Mathematics</td>
                        <td>Science</td>
                        <td>Social Science</td>
                        <td>English</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="card shadow-sm border-0 py-3 px-4 mt-3">
                <h4 className="fw-bold">SYLLABUS CLASS 10 FEE STRUCTURE</h4>
                <div className="content mt-2">
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th>Course Duration</th>
                        <th>Registration Fee </th>
                        <th>Admission Fee </th>
                        <th>Net Payable Fee </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1 year</td>
                        <td>525</td>
                        <td>50000</td>
                        <td>50525</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-lg-0 mt-sm-5">
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

export default PreFoundationPreparation;
