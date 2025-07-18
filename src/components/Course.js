// Course.js
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import { FaTrashAlt, FaEdit, FaPlayCircle } from "react-icons/fa";

const Course = ({ course }) => {
  const handleViewTutorial = () => {
    if (course.courseUrl) {
      window.open(course.courseUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("⚠️ No tutorial URL provided for this course.");
    }
  };

    const handleUpdateTutorial = () => {
    if (course.courseId) {
      window.open(course.courseId, "_blank", "noopener,noreferrer");
    } else {
      alert("⚠️ No data Found against this course.");
    }
  };

  return (
    <Card className="shadow-sm h-100">
      <CardBody className="d-flex flex-column">
        {/* Course Title */}
        <CardTitle tag="h5" className="mb-3 text-primary fw-bold">
          {course.title}
        </CardTitle>

        {/* Course Description */}
        <CardText className="flex-grow-1">{course.description}</CardText>

        {/* Buttons */}
        <Container className="d-flex justify-content-center flex-wrap gap-2 mt-4">
          <Button color="success" outline onClick={handleViewTutorial}>
            <FaPlayCircle className="me-1" />
            View Tutorial
          </Button>
          <Button color="danger" outline>
            <FaTrashAlt className="me-1" />
            Delete
          </Button>
          <Button color="warning" outline onClick={handleUpdateTutorial}>
            <FaEdit className="me-1" />
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
