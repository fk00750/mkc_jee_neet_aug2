import React, { useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import styles from './index.module.css';
import API from '../../../api';
import Router from 'next/router';

function ContactForm({ title, formType, buttonTitle, buttonClass }) {

  const [show, setShow] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [stateList, setStateList] = React.useState(null);
  const [queryType, setQueryType] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    contactNumber: '',
    state: '',
    courseName: '',
    message: ''
  });
  const [constantOtp, setConstantOtp] = React.useState('');
  const [verifyOtp, setVerifyOtp] = React.useState('');
  const [otpError, setOtpError] = React.useState(null);

  const handleOtpChange = (otp) => setVerifyOtp(otp);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postFormXData = (paramData, queryType) => {
    const data = {
      sname: paramData.name,
      smobile: paramData.contactNumber,
      sstate: paramData.state,
      scourse: paramData.courseName,
      squery: paramData.message,
      enquirypage: queryType
    };
    var config = {
      method: "post",
      url: API.enquiryXForm,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postFormData = (paramData, queryType) => {
    const data = {
      sname: paramData.name,
      smobile: paramData.contactNumber,
      sstate: paramData.state,
      scourse: paramData.courseName,
      squery: paramData.message,
      enquirypage: queryType
    };

    var config = {
      method: "post",
      url: "https://api.majorkalshiclasses.com/react-api.php",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };



    return axios(config)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOtpFromServer = (mobilenumber) => {
    let data = JSON.stringify({
      "mobile": mobilenumber
    });
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: API.sendOtp,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function handlePostRequest(e) {
    e.preventDefault();
    //console.log('Enquiry Form Data : ', formData);
    if (formData.name && formData.contactNumber && formData.state && formData.courseName && formData.message) {
      let res = await getOtpFromServer(formData.contactNumber);
      setConstantOtp(res);
      handleShow();
      if (res) {
        console.log('Success!');
        console.log(res);
      } else {
        console.log('Something Went Wrong!');
        console.log(res);
      }
    }
  }

  async function handleOtpRequest(e) {
    e.preventDefault();
    if (verifyOtp.length == 4) {
      if (constantOtp.otp == verifyOtp) {
        let newsubmittedresponse = await postFormXData(formData, queryType);
        if (newsubmittedresponse.status == "success") {
          Router.push('/thank-you');
        }
        setOtpError('');
      } else {
        setOtpError('otp');
      }

      setOtpError(null);
      setVerifyOtp('');
      setFormData({
        name: '',
        contactNumber: '',
        state: '',
        courseName: '',
        message: ''
      });
    } else {
      setOtpError('otp');
    }
  }

  function handleResendOTP(e, contactNumber) {
    e.preventDefault();
    //console.log('Resend OTP : ', contactNumber);
    getOtpFromServer(contactNumber);
  }

  const handleContactNumberChange = (e) => {
    let tempNumber = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '');
    setFormData({ ...formData, contactNumber: tempNumber });
  };

  const getStateList = () => {
    const data = JSON.stringify({
      country: "India"
    });
    axios({
      method: "post",
      url: "https://countriesnow.space/api/v0.1/countries/states",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        setStateList(response.data.data.states);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (formType) {
      setQueryType(formType);
    }
    getStateList();
  }, []);

  return (
    <div className={styles.form_wrapper}>
      {title ?
        <div className={styles.form_heading}>
          <h4>{title}</h4>
        </div>
        :
        null}
      <div className={styles.event_form}>
        <form onSubmit={handlePostRequest}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
              required />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Contact Number"
              name="contactNumber"
              onChange={handleContactNumberChange}
              value={formData.contactNumber}
              required />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="state"
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              value={formData.state}
              required
            >
              <option value="">Select State</option>
              {stateList && stateList !== null && stateList.map((item, index) => {
                return (
                  <option key={index} value={item.name}>{item.name}</option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="courseName"
              onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
              value={formData.courseName}
              required
            >
              <option value="">Select Course </option>
              <option value="neet">NEET</option>
              <option value="jee">JEE</option>
              <option value="pre-foundation">Pre-Foundation</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Write Your Message"
              rows="3"
              name="message"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              value={formData.message}
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button className={buttonClass} type="submit">{buttonTitle}</button>
          </div>
        </form>
      </div>

      {/* OTP Modal */}
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleOtpRequest}>
          <div className="d-flex align-items-center, justify-content-center">
            <h5 className="px-3 py-4">OTP Verification</h5>
          </div>
          <div className='mb-3 text-center text-danger'><small>{otpError === "otp" ? "You've entered wrong otp!" : null}</small></div>
          <div className="d-flex align-items-center justify-content-center">
            <OtpInput
              value={verifyOtp}
              onChange={handleOtpChange}
              numInputs={4}
              containerStyle={"otp-container"}
              isInputNum={true}
              separator={<span className="otp-divider"></span>} />
          </div>
          {otpError ?
            <div className="d-flex align-items-center justify-content-center mt-3">
              <p className="text-danger">You've entered wrong otp.</p>
            </div>
            :
            null}
          <div className="d-flex align-items-center justify-content-center py-3">
            <button className="btn btn-resend-otp" onClick={(e) => handleResendOTP(e, formData.contactNumber)}>
              Resend OTP
            </button>
          </div>
          <div className="d-flex align-items-center, justify-content-center pb-4 pt-3">
            <button className="btn btn-otp" type="submit">
              Verify
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ContactForm;
