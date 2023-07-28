import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/User.webp";
import HeaderSocials from "./HeaderSocials";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import "animate.css";

// import DarkMode from "../darkmode/DarkMode";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Down from '../../assets/Down_Arrow.gif';
// data-aos="fade-up" data-aos-easing="ease-in-out"

const Header = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2500 });
  // }, []);
  return (
    <header id="home">
      <div className="container header__container">
        <small>Hello I'm</small>
        <h1 className="animate__backInLeft">Md Faizan Ahmad</h1>
        <h5 className="text-light animate__bounceInRight">
          {" "}
          Front-End Web Developer
        </h5>

        {/* <DarkMode/> */}
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down <TfiAngleDoubleDown className="down-arrow" />
        </a>
      </div>
    </header>
  );
};

export default Header;
