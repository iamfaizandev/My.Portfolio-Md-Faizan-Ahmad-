import React, { useEffect } from "react";
import "./services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { SlStar } from "react-icons/sl";
import { Button } from "react-bootstrap";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="services" data-aos="fade-up" data-aos-easing="ease-in-out">
      <h5>What I Offer </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>Front-End Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <SlStar className="service__list-icon" />
              <p>
                I will Build Responsive,Attractive & User-Friendly & SEO Web
                applications, and User experience will be easy and smooth
              </p>
            </li>
          </ul>
        </article>

        {/* ================Backend======================= */}
        <article className="service">
          <div className="services__head">
            <h3>Back-End Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <SlStar className="service__list-icon" />
              <p>
                I Can do Work on Back-end,API,Database,Express.js,
                with,server-side,I have Knowloage on Git&Github
              </p>
            </li>
          </ul>
        </article>
        {/* ================EDITING======================= */}
        <article className="service" id="editing">
          <div className="services__head">
            <h3>Editing </h3>
          </div>
          <ul className="services__list">
            <li>
              <SlStar className="service__list-icon" />
              <p>
                I Can do Intermediate Level PhotoEditing , Banner ,Video
                Editing. I have Knowloage Ms-Words,i can do work as freelancer
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div className="hire_me">
        <div className="hire_container">
          <h3>Interested to Working With me? Let's Connect !</h3>
          <small>I'm available for freelance work</small> <br />
          <Button href="#contact" className="hire_btn" variant="success">
            HIRE ME
          </Button>{" "}
          <br />
          <a href="mailto:md.faizan.ahmad.web@gmail.com">
            md.faizan.ahmad.web@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
