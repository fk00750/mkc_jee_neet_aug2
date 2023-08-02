import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './index.module.css';
import { CgArrowLongRight } from 'react-icons/cg';
import SectionHead from '../section-head';
import { IoCall } from 'react-icons/io5';

function LetUsHelp() {
  return (
    <div className={`${styles.feature_wrapper} section`}>
      <div className={styles.feature_section_inner}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className={styles.let_info}>
                <h6 className="text-white">LET US HELP</h6>
                <h1 className="text-white mb-0">Finding Your Right Courses</h1>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className={styles.let_info_button}>
                  <Button variant='white' className='d-flex align-items-center px-4 py-3'>
                    <h5 className='fw-normal mb-0 pe-2'>Get Started Now</h5>
                    <CgArrowLongRight size={24} />
                  </Button>
                  <a className='btn btn-link text-white d-flex align-items-center px-4 py-3'>
                    <IoCall size={20} className='me-3' />
                    (+91) 9696330033
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetUsHelp;
