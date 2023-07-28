import React from "react";
import { motion, useScroll } from "framer-motion";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <Header />
      <Nav />
      <About />
      <Education />
      <Skills />
      {/* <Services /> */}
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
