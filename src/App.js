// App.js
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Courses from "./components/Courses";
import AddCourseForm from "./components/AddCourseForm";
import Header from "./components/Header";
import Menus from "./components/Menus";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./api/Login";
import logoutApi from "./api/Logout";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Logout component
function Logout({ onLogout }) {
  const navigate = useNavigate();

useEffect(() => {
  let isCalled = false;
  async function doLogout() {
    if (isCalled) return;
    isCalled = true;

    await logoutApi();
    onLogout();
    toast.info("ℹ️ Logged out successfully!", {
      position: "top-center",
      autoClose: 1000,
      toastId: "logout-toast",
    });
    navigate("/login");
  }
  doLogout();
}, [onLogout, navigate]);


  return (
    <div className="text-center mt-5">
      <h3>Logging out...</h3>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("jwtToken")) // Check token on load
  );

  /*useEffect(() => {
    if (isLoggedIn) {
      toast.success("✅ Welcome to LearnCodewith Shivraj!", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }, [isLoggedIn]);*/

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    // ❌ Removed duplicate toast from here
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <Router>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            <Header />
            <div className="d-flex" style={{ minHeight: "100vh" }}>
              {/* Sidebar */}
              <nav
                className="bg-primary text-white p-3"
                style={{ width: 280, minHeight: "100vh" }}
              >
                <Menus />
              </nav>
              {/* Main content */}
              <main
                className="flex-grow-1 p-4"
                style={{
                  overflowY: "auto",
                  backgroundColor: "#f5f6fa", // subtle off-white background
                }}
              >

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add-course" element={<AddCourseForm />} />
                  <Route path="/view-courses" element={<Courses />} />
                  <Route path="/view-about" element={<About />} />
                  <Route path="/view-contact" element={<Contact />} />
                  <Route
                    path="/logout"
                    element={<Logout onLogout={handleLogout} />}
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </div>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
