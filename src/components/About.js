// About.js
import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap";

const About = () => {
  useEffect(() => {
    document.title = "About || LearnCodewith Shivraj";
  }, []);

  return (
    <Container className="mt-5" style={{ maxWidth: 700 }}>
      <Card className="shadow-sm p-4">
        <CardBody>
          <CardTitle tag="h3" className="mb-3 text-primary fw-bold text-center">
            About LearnCode by Shivraj
          </CardTitle>
          <CardText className="fs-5 text-center">
            Welcome to <strong>LearnCode by Shivraj</strong>! 🚀
            <br />
            This platform is designed to help you master programming languages
            and frameworks like Java, Spring Boot, ReactJS, Python, and more.
            <br />
            Build your skills step-by-step and become a confident developer. 💻
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default About;
