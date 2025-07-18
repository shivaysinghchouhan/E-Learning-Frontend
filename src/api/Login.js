// Login.js
import React, { useState } from "react";
import "./Login.css";
import base_url from "../api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: base_url,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  // Login form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup form states
  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [address, setAddress] = useState("");

  const LOGIN_API = "/auth/login";
  const SIGNUP_API = "/user/api/saveUserDetails";

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(LOGIN_API, {
        userName: email,
        userPassword: password,
      });

      const data = response.data;

      if (data && data.username && data.jwtToken) {
        localStorage.setItem("jwtToken", data.jwtToken);

        toast.success(`✅ Welcome ${data.username}!`, {
          position: "top-center",
        });

        setTimeout(() => onLogin(), 1500);
      } else {
        toast.error("❌ Unauthorized user! Please check your credentials.", {
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("❌ Unauthorized user! Please check your credentials.", {
          position: "top-center",
        });
      } else {
        toast.error("⚠️ Something went wrong. Please try again later.", {
          position: "top-center",
        });
      }
    }
  };

  /*const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(SIGNUP_API, {
        userName: signUpEmail,
        userPassword: signUpPassword,
        userAddress: address,
        full_name: name,
      });
      toast.success("✅ User registered successfully! You can now login.", {
        position: "top-center",
      });
      setIsSignUp(false);
      setName("");
      setSignUpEmail("");
      setSignUpPassword("");
      setAddress("");
    } catch (error) {
      toast.error("❌ Failed to register user! Please try again.", {
        position: "top-center",
      });
    }
  };*/

  const handleSignUpSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post(SIGNUP_API, {
      userName: signUpEmail,
      userPassword: signUpPassword,
      userAddress: address,
      full_name: name,
    });

    const data = response.data; // this is your plain string ("exist" or "success")

    if (data === "exist") {
      toast.warning("❌ User already exists! Please use a different username.", {
        position: "top-center",
      });
    } else if (data === "success") {
      toast.success("✅ User registered successfully! You can now login.", {
        position: "top-center",
      });

      // Clear form and switch to login view
      setIsSignUp(false);
      setName("");
      setSignUpEmail("");
      setSignUpPassword("");
      setAddress("");
    } else {
      // Unknown response
      toast.error("⚠️ Unexpected response from server.", {
        position: "top-center",
      });
    }
  } catch (error) {
    toast.error("❌ Failed to register user! Please try again.", {
      position: "top-center",
    });
  }
};


  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100 bg-primary">
      <div className="login-box p-4 bg-white rounded shadow" style={{ maxWidth: 400, width: "100%" }}>
        {!isSignUp ? (
          <>
            <h2 className="mb-4 text-center text-primary">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label className="form-label">UserName</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>
            </form>
            <p className="text-center">
              Don't have an account?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-center text-primary">Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">UserName</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Register
              </button>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => setIsSignUp(false)}
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
