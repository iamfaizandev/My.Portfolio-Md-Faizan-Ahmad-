import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./work.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
//import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.webp";

const data = [
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: "My Portfolio with JS",
  //   github:
  //     "https://github.com/iamfaizandev?tab=repositories&q=&type=&language=&sort=name",
  //   demo: "https://iamfaizandev.github.io/My-Portfolio/",
  // },
  {
    id: 2,
    image: IMG2,
    title: "Hotel Room Booking",
    github:
      "https://github.com/iamfaizandev?tab=repositories&q=&type=&language=&sort=name",
    demo: "https://iamfaizandev.github.io/Hotel-Room-Booking/",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Inox Movies Ticket Booking",
  //   github:
  //     "https://github.com/iamfaizandev?tab=repositories&q=&type=&language=&sort=name",
  //   demo: "https://iamfaizandev.github.io/Inox-Movies/",
  // },
  {
    id: 4,
    image: IMG4,
    title: "Hotel Landing",
    github:
      "https://github.com/iamfaizandev?tab=repositories&q=&type=&language=&sort=name",
    demo: "https://iamfaizandev.github.io/Hotel-Template/",
  },
  {
    id: 5,
    image: IMG5,
    title: "BMI Cal",
    github: "https://iamfaizandev.github.io/Bmi-Calculator/",
    demo: "https://iamfaizandev.github.io/Bmi-Calculator/",
  },
  {
    id: 6,
    image: IMG6,
    title: "To-Do App",
    github: "https://iamfaizandev.github.io/To-Do.App/",
    demo: "https://iamfaizandev.github.io/To-Do.App/",
  },
];

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="work" data-aos="fade-up" data-aos-easing="ease-in-out">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container work__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <Card id={id} className="p-2  work__item">
              <Card.Img
                variant="top"
                src={image}
                alt="project_coverpage"
                className="work__item-image"
              />
              <Card.Body>
                <Card.Title className="h6">{title}</Card.Title>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-around  border-0">
                <Button href={github} variant="outline-light" target="_blank">
                  {" "}
                  GitHub
                </Button>
                <Button href={demo} variant="light" target="_blank">
                  {" "}
                  Live Demo
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
