import React from "react";
import styles from "./index.module.css";
import LetUsHelp from "../let-us-help";
import { Image } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <LetUsHelp />
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={styles.footer_logo}>
                <Image
                  src="https://img.majorkalshiclasses.com/images/file_1689026052689.svg"
                  className="img-fluid"
                />
              </div>
              <p>
                MKC is a leading JEE and NEET institute in India that prepares
                students to become doctors and engineers. Our institute has a
                main branch in Prayagraj and we also offer online classes
                through our MKC Learning app. MKC is a trusted institute with a
                proven track record of success.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h5>Courses</h5>
                    <ul>
                      <li>
                        <a href="#">Neet</a>
                      </li>
                      <li>
                        <a href="#">Jee</a>
                      </li>
                      <li>
                        <a href="#">Pre-Foundation</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>Other Links</h5>
                    <ul>
                      <li>
                        <a href="#">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h5>Quick Links</h5>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="/about-us">About us</a>
                      </li>
                      <li>
                        <a href="#">Admissions</a>
                      </li>
                      <li>
                        <a href="">Careers</a>
                      </li>
                      <li>
                        <a
                          href="https://blog.majorkalshiclasses.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h5>Contact Us</h5>
                    <div className="pt-2">
                      <p className="mb-0">Address</p>
                      <p className="mb-0 text-secondary">
                        105/244, Shapath Building, Tagore Town, Prayagraj, Uttar
                        Pradesh - 211002
                      </p>
                    </div>
                    <div className="pt-2">
                      <p className="mb-0">Phone</p>
                      <p className="mb-0 text-secondary">(+91) 9696330033</p>
                    </div>
                    <div className="pt-2">
                      <p className="mb-0">Email</p>
                      <p className="mb-0 text-secondary">
                        support@majorkalshiclasses.com
                      </p>
                    </div>
                    <div className="pt-2">
                      <p className="mb-0">Follow Us</p>
                      <div className={styles.social_media}>
                        <a
                          href="https://www.facebook.com/majorkalshiclasses"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="https://www.instagram.com/major_kalshi_classes/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/majorkalshiclasses/?original_referer=https%3A%2F%2Fmajorkalshiclasses.com%2F"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                        <a
                          href="https://twitter.com/i/flow/login?redirect_after_login=%2FMajKalshiClases"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href="https://www.youtube.com/c/MajorKalshiclassesPvtLtd"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaYoutube />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark mt-5">
          <p className="mb-0 py-4 text-center text-white">
            © 2023 Major Kalshi Classes. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
