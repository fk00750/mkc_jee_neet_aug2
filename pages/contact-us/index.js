import React from "react";
import styles from "./index.module.css";
import HeroHead from "@/components/common/hero-head";
import {
  IoCallOutline,
  IoLocation,
  IoLocationOutline,
  IoLogoWhatsapp,
  IoMail,
  IoMailOutline,
} from "react-icons/io5";
import ContactForm from "@/components/common/contact-form";

function ContactUs() {
  return (
    <>
      <HeroHead
        title="Contact Us"
        subTitle="Get In Touch With us"
        position="center"
      />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 pe-md-5 pe-0 ps-0">
              <div className="row">
                <div className="col-md-6 mt-3">
                  <div
                    className={`${styles.contact_card} card border-0 bg-background h-100 p-3 py-4`}
                  >
                    <div className="d-flex justify-content-center mb-4 mt-3">
                      <IoCallOutline size={32} />
                    </div>
                    <h5 className="text-center">Call Us</h5>
                    <p className="text-center">
                      <small>(+91) 9696330033</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div
                    className={`${styles.contact_card} card border-0 bg-background h-100 p-3 py-4`}
                  >
                    <div className="d-flex justify-content-center mb-4 mt-3">
                      <IoLogoWhatsapp size={32} />
                    </div>
                    <h5 className="text-center">Whatsapp Us</h5>
                    <p className="text-center">
                      <small>(+91) 9696330033</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div
                    className={`${styles.contact_card} card border-0 bg-background h-100 p-3 py-4`}
                  >
                    <div className="d-flex justify-content-center mb-4 mt-3">
                      <IoMailOutline size={32} />
                    </div>
                    <h5 className="text-center">Email Us</h5>
                    <p className="text-center">
                      <small>support@majorkalshiclasses.com</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div
                    className={`${styles.contact_card} card border-0 bg-background h-100 p-3 py-4`}
                  >
                    <div className="d-flex justify-content-center mb-4 mt-3">
                      <IoLocationOutline size={32} />
                    </div>
                    <h5 className="text-center">Our Location</h5>
                    <p className="text-center">
                      <small>
                        Shapath Building, Tagore Town, Prayagraj, Uttar Pradesh
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5 mt-md-3">
              <ContactForm
                title="Send Your Message"
                formType="neet-jee"
                buttonTitle="Send"
                buttonClass="btn btn-primary w-100 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
