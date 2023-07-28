import React from "react";
import CV from "../../assets/Md-Faizan-Ahmad_CV.pdf";
import { Button } from "react-bootstrap";

const CTA = () => {
  return (
    <div className="cta">
      <Button href={CV} variant="outline-light" download>
        Download CV
      </Button>
      <Button href="#contact" variant="light">
        Lets Talk
      </Button>
    </div>
  );
};

export default CTA;
