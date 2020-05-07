import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      const newUser = {
        name,
        email,
        password
      };

      try {
          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          }

          const body = JSON.stringify(newUser)
          const res = await axios.post('/api/users', body, config)
          console.log(res.data)
      } catch (error) {
          console.error(error.message)
      }
    }
  };
  const { name, email, password, password2 } = formData;
  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Name"
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email Address"
            required
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email.
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            required
            minLength="6"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password2"
            id="confirmPassword"
            value={password2}
            placeholder="Confirm Password"
            required
            minLength="6"
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </>
  );
};

export default Register;
