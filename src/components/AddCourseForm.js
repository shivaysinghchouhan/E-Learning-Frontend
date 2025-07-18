import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig"; // import axios instance
import "../styles/CourseAndMenus.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCourseForm = () => {
  useEffect(() => {
    document.title = "Add Course || LearnCodewith Shivraj";
  }, []);

  const [course, setCourse] = useState({
    title: "",
    description: "",
    url: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      courseName: course.title,
      courseTitle: course.title,
      courseDescription: course.description,
      courseUrl: course.url,
      activeCourse: "YES",
    };

    try {
      const response = await api.post("/course/apis/saveCourseDetails", payload);

      if (response.status === 200) {
        toast.success(`✅ Course saved successfully!`, {
          position: "top-center",
          autoClose: 3000,
        });
        setCourse({ title: "", description: "", url: "" });
      } else {
        toast.error("❌ Failed to save course.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error saving course:", error);
      toast.error("⚠️ Could not connect to the server!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit} className="add-course-form enhanced-form">
        <h2>Add New Course</h2>

        <div className="form-group">
          <label htmlFor="title">📘 Course Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter course title"
            value={course.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">📝 Course Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter course description"
            value={course.description}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">🔗 Course URL</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            value={course.url}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          ➕ Add Course
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AddCourseForm;
