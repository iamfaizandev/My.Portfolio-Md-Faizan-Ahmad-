import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
import { Button } from "react-bootstrap";
import ME from "../../assets/User_2-.png";
import "animate.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" data-aos-easing="ease-in-out" id="about">
      <h5>Get To Know</h5>
      <h2 className="animate__backInLeft">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About ME" className="userImg" />
          </div>
        </div>
        <div className="about__intro">
          <p>
            Hi! My name is<span> Md Faizan Ahmad</span> ,I'm a Web Developer.I
            am currently Learning React.js, I have Completed Full Stack Web
            Development certificate course From Naresh IT Ameerpet Hyderabad. I
            have knowledge about technology and I am always willing and keen to
            learn new things about technology. I am a multilingual individual as
            I can speak English and Urdu as well as, my own language which is
            Hindi.
          </p>

          <Button href="#contact" variant="light" className="About_btn">
            {" "}
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
