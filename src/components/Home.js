// Home.js
import React from "react";
import { Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #6e8efb, #a777e3, #c77dff, #6e8efb)",
          color: "white",
        }}
      >
        <h1 className="display-4 fw-bold">Learn Code with Shivraj Singh</h1>
        <p className="lead my-4">
          A modern platform powered by React.js and Spring Boot to sharpen your
          programming skills.
        </p>
        <Button color="light" size="lg" onClick={() => navigate("/view-courses")}>
          Get Started
        </Button>
      </div>
    </Container>
  );
};

export default Home;
