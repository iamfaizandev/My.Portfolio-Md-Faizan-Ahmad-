import React, { useState } from "react";
import "./nav.css";
import "animate.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser, FaGraduationCap } from "react-icons/fa";
// import { BiBook } from 'react-icons/bi';
// import { RiServiceLine } from 'react-icons/ri';
// import { MdMiscellaneousServices } from "react-icons/md";
import { BsChatRightTextFill, BsCode } from "react-icons/bs";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="animate__zoomIn">
      <a
        href="#home"
        name="home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        name="about"
        aria-label="Nav_Links"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#education"
        name="educaation"
        aria-label="Nav_Links"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <FaGraduationCap />
      </a>
      {/* <a
        href="#services"
        name="services"
        aria-label="Nav_Links"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a> */}
      <a
        href="#work"
        name="work"
        aria-label="Nav_Links"
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? "active" : ""}
      >
        <BsCode />
      </a>
      <a
        href="#contact"
        name="contact"
        aria-label="Nav_Links"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsChatRightTextFill />
      </a>
      {/* <a href="#work"><BiMessageSquareDetail/></a>  */}
    </nav>
  );
};

export default Nav;
