import React from 'react';
import HeroHead from '@/components/common/hero-head';
import SectionHead from '@/components/common/section-head';
import styles from './index.module.css';
import { Image } from 'react-bootstrap';

function AboutUs() {
  return (
    <>
      <HeroHead
        subTitle="Major Kalshi Classes"
        title="About Us"
        position="center"
      />
      <div className='section'>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-4'>
              <Image
                src="https://img.majorkalshiclasses.com/images/file_1686119102532.webp"
                className='img-fluid'
              />
            </div>
            <div className='col-md-8 ps-md-5'>
              <SectionHead
                subTitle="Major Kalshi Classes"
                title="CHAIRPERSON'S MESSAGE"
              />
              <div className={`${styles.message} mt-md-5 mt-3`}>
                <p>
                  Nothing is impossible in the world "this sentence is a motivation for all competitive aspirants, but to achieve any good result the only thing that matters is your dedication towards your study. Educating students is the Nobel work. We here at MKC not only teach but also make him develop whole personality of student to succeed in his life. MKC is already a trusted name among the students since last 16 years, in the category of Indian Defence Exam Preparation, now we decided after a huge success in Defence industry that our Experience And methodology will also help NEET & JEE aspirants. The vision to launch this course is to increase the success ratio and to Provide quality education to the candidate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section bg-light'>
        <div className='container'>
          <div className='row mt-6'>
            <div className='col-md-8 pe-md-5'>
              <SectionHead
                subTitle="Major Kalshi Classes"
                title="ACADEMIC DIRECTOR'S MESSAGE"
              />
              <div className={`${styles.message} mt-md-5 mt-3`}>
                <p>
                  Prayagraj is a city known as Educational Hub, in this city we earned a trust and believe of thousands of parents and students. Now another big responsibly came on my shoulder to educate the JEE & NEET aspirants in right manner to make them qualify their completion. Only this is my dream. we understand what exactly a candidate needs during his preparation. So now to accept all challenges and assure all NEET & JEE competitors that their dream is my dream we work together and one day we shall definitely you I will achieves our goals.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <Image
                src="https://img.majorkalshiclasses.com/images/file_1686124352816.webp"
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
