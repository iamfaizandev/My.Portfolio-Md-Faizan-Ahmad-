import React, { useEffect } from "react";
import "./education.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="education" data-aos="fade-up" data-aos-easing="ease-in-out">
      <h5>Get To Know</h5>
      <h2>Education</h2>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card" id="education">
            <GiGraduateCap className="about__icon" />
            <h5>Education</h5>
            <small>
              [2021-on Going] Pursuing Master From Magadh University Bodhgaya
              Gaya Bihar
            </small>
            <br />
            <small>
              [2017-2020] Graduate From Magadh University Bodhgaya Gaya Bihar
            </small>
            <br />
            <small>[2015-2017] Intermediate From BSEB Patna Bihar</small>
            <br />
            <small>[2015] SCC(10th) From BSEB Patna Bihar</small>
          </article>

          <article className="about__card" id="Achiment">
            <FaAward className="about__icon" />
            <h5>Achievement</h5>
            <small>
              Information Technology Bihar State-Certificate <br />
              Language Skills Bihar State-Certificate <br />
              Soft Skills Bihar State-Certificate
            </small>
          </article>

          <article className="about__card" id="Project">
            <AiFillProject className="about__icon" />
            <h5>Project</h5>
            <small>10+ Project Completed</small>
            <div className="mb-2">
              <a
                href="https://github.com/iamfaizandev?tab=repositories&q=&type=&language=&sort=name"
                className="view__project-btn"
              >
                View Project
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
