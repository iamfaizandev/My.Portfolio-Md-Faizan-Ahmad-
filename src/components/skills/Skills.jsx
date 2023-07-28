import React, { useEffect } from "react";
import "./skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { TiInputChecked } from "react-icons/ti";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiJquery,
  SiExpress,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="education" data-aos="fade-up" data-aos-easing="ease-in-out">
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="frontend__skills">
          <h3 className="h6">FrontEnd Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <SiHtml5 className="skills__details-icon" />
              <div>
                <h4 className="h5">HTML</h4>
              </div>
            </article>

            <article className="skills__details">
              <SiCss3 className="skills__details-icon" />
              <div>
                <h4 className="h5">CSS3</h4>
              </div>
            </article>

            <article className="skills__details">
              <SiBootstrap className="skills__details-icon" />
              <div>
                <h4 className="h5">Bootstrap </h4>
              </div>
            </article>

            <article className="skills__details">
              <SiJavascript className="skills__details-icon" />
              <div>
                <h4 className="h5">JavaScript </h4>
              </div>
            </article>

            <article className="skills__details">
              <SiReact className="skills__details-icon" />
              <div>
                <h4 className="h5">React JS </h4>
              </div>
            </article>
            <article className="skills__details">
              <SiGithub className="skills__details-icon" />
              <div>
                <h4 className="h5">Git & GitHub </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="backend__skills">
          <h3 className="h6">
            Backend Development
            <br />{" "}
            <span className="text-light">Have Knowledge on Back-End</span>
          </h3>

          <div className="skills__content">
            <article className="skills__details">
              <SiJquery className="skills__details-icon" />
              <div>
                <h4 className="h5">jQuery</h4>
              </div>
            </article>

            <article className="skills__details">
              <FaNode className="skills__details-icon" />
              <div>
                <h4 className="h5">Node Js</h4>
              </div>
            </article>

            <article className="skills__details">
              <SiExpress className="skills__details-icon" />
              <div>
                <h4 className="h5">Express JS</h4>
              </div>
            </article>

            <article className="skills__details">
              <SiMongodb className="skills__details-icon" />
              <div>
                <h4 className="h5">MongoDB </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
