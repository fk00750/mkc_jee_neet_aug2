import React from "react";
import SectionHead from "@/components/common/section-head";
import styles from "./index.module.css";
import { GiLightBulb, GiTeacher, GiBookshelf } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { TbBoxAlignBottomRight } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { BsPatchQuestionFill } from "react-icons/bs";
import { PiCubeFocusFill } from "react-icons/pi";

function AdvantagesOfMKC() {
  return (
    <div className="section">
      <div className="container">
        <SectionHead
          subTitle="LET’S LEARN TOGETHER"
          title="MKC Best Online JEE and NEET Preparation Course"
          position="center"
        />
        <div className="row mt-5">
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <GiLightBulb size={36} />
              <h5>Conceptual Classes</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <GiTeacher size={36} />
              <h5>Expert Faculty</h5>
              <p>
                MKC's faculty are experienced, qualified, and passionate about
                helping students succeed.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <SiGoogleclassroom size={36} />
              <h5>Online Resources</h5>
              <p>
                MKC offers online resources such as video lectures, practice
                questions, and study materials to help students learn and
                prepare for exams.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <GiBookshelf size={36} />
              <h5>Flexible Learning Options</h5>
              <p>
                MKC offers flexible learning options so students can study at
                their own pace and time, fitting around other commitments.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <TbBoxAlignBottomRight size={36} />
              <h5>Student Support</h5>
              <p>
                MKC provides student support services, such as tutoring, doubt
                clearing, and exam preparation, to help students succeed in JEE
                and NEET.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <LuBrainCircuit size={36} />
              <h5>CBT Based Test</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <BsPatchQuestionFill size={36} />
              <h5>Personalized Learning</h5>
              <p>
                MKC offers personalized learning to help students learn more
                effectively and efficiently.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className={styles.info_card}>
              <PiCubeFocusFill size={36} />
              <h5>Focus on Strategy</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesOfMKC;
