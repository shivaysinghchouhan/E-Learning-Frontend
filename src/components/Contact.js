// Contact.js
import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact || LearnCodewith Shivraj";
  }, []);

  return (
    <Container className="mt-5" style={{ maxWidth: 600 }}>
      <Card className="shadow-sm p-4">
        <CardBody className="text-center">
          <CardTitle tag="h3" className="mb-4 text-primary fw-bold">
            Contact Us
          </CardTitle>
          <div className="mb-3 fs-5 d-flex align-items-center justify-content-center gap-2">
            <FaUser />
            <span>Shivraj Singh Chouhan</span>
          </div>
          <div className="mb-3 fs-5 d-flex align-items-center justify-content-center gap-2">
            <FaPhone />
            <span>+91-9111022363</span>
          </div>
          <div className="mb-3 fs-5 d-flex align-items-center justify-content-center gap-2">
            <FaEnvelope />
            <span>shivrajchouhan64@gmail.com</span>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Contact;
