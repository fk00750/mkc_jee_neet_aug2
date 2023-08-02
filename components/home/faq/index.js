import React from "react";
import SectionHead from "@/components/common/section-head";
import { Accordion } from "react-bootstrap";
import styles from "./index.module.css";

function FrequentlyAskQuestion() {
  return (
    <div className="section bg-white">
      <div className="container">
        <SectionHead
          subTitle="MKC JEE, NEET & PRE-FOUNDATION"
          title="Frequently Asked Questions"
          position="center"
        />
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <Accordion>
              <Accordion.Item
                eventKey="0"
                className="border border-bottom-0 bg-light"
              >
                <Accordion.Header>
                  What is the JEE, NEET, and Pre-Foundation program at MKC
                  Institute?
                </Accordion.Header>
                <Accordion.Body>
                  The JEE, NEET, and Pre Foundation program at MKC Institute is
                  a course that prepares students for the JEE, NEET, and
                  prepares class 9 and 10 students. The program covers all the
                  topics that are tested in the JEE, NEET, and other exams, and
                  it also provides students with the opportunity to take mock
                  exams and receive personalized feedback from their teachers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="border border-bottom-0 bg-light"
              >
                <Accordion.Header>
                  How do I apply for the JEE, NEET, and Pre-Foundation programs
                  at MKC Institute?
                </Accordion.Header>
                <Accordion.Body>
                  To apply for the JEE, NEET, and Pre Foundation programs at MKC
                  Institute, you can visit the MKC JEE NEET website and fill out
                  the online application form. The application form is available
                  on the website.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="border border-bottom-0 bg-light"
              >
                <Accordion.Header>
                  What are the teaching methods used in the JEE, NEET, and
                  Pre-Foundation programs at MKC Institute?
                </Accordion.Header>
                <Accordion.Body>
                  MKC Institute uses lectures, tutorials, and problem-solving
                  sessions to teach JEE, NEET, and Pre Foundation students.
                  Lectures cover concepts, tutorials provide practice, and
                  problem-solving sessions develop skills.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="border border-bottom-0 bg-light"
              >
                <Accordion.Header>
                  What are the student support services available at MKC
                  Institute?
                </Accordion.Header>
                <Accordion.Body>
                  The student support services available at MKC Institute
                  include: Personalized tutoring, Online resources, Career
                  counselling
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border bg-light">
                <Accordion.Header>
                  What are the prizes and scholarships that are offered by the
                  MKC Talent Hunt?
                </Accordion.Header>
                <Accordion.Body>
                  The talent hunt will offer a number of prizes and scholarships
                  to the top performers. The prizes include cash prizes,
                  scholarships, and study materials.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskQuestion;
