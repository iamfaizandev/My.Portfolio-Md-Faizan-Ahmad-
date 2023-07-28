import React, { useEffect, useRef } from "react";
import "./contact.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { Button } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import {
  BsLinkedin,
  BsFillTelephoneForwardFill,
  BsGithub,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import CV from "../../assets/Md-Faizan-Ahmad_CV.pdf";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gqv9pbg",
      "template_pfzn9ms",
      form.current,
      "WUurn2Sc5HEjGl4uQ"
    );
    e.target.reset();
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-easing="ease-in-out">
      <h5>Get In Touch With Me</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <Button type="submit" variant="outline-light">
            Send Message
          </Button>
        </form>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <br />
            <a
              href="mailto:md.faizan.ahmad.web@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <br />
            <a
              href="https://wa.me/917549692029"
              target="_blank"
              rel="noreferrer"
            >
              Send a Text
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <br />
            <a
              href="https://www.linkedin.com/in/iamfaizandev/"
              target="_blank"
              rel="noreferrer"
            >
              Check It Out
            </a>
          </article>

          <article className="contact__option">
            <BsGithub className="contact__option-icon" />
            <br />
            <a
              href="https://github.com/iamfaizandev"
              target="_blank"
              rel="noreferrer"
            >
              Vist My GitHub
            </a>
          </article>

          <article className="contact__option">
            <BsFillTelephoneForwardFill className="contact__option-icon" />
            <br />
            <a href="tel:+917563092029">Call Me</a>
          </article>
          <article className="contact__option">
            <Button href={CV} variant="outline-light" download>
              Download CV
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
