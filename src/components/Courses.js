// Courses.js
import React, { useEffect, useState } from "react";
import Course from "./Course";
import api from "../api/axiosConfig";
import { Spinner, Container } from "reactstrap";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "All Courses || LearnCodewith Shivraj";
    api
      .get("/course/apis/getCourses")
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error fetching courses, please try again.");
      });
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-3">All Courses</h1>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner color="primary" />
        </div>
      ) : courses.length > 0 ? (
        <div className="row g-4">
          {courses.map((course, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <Course course={course} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center fs-5 mt-5">No courses available right now.</p>
      )}
    </Container>
  );
};

export default Courses;
