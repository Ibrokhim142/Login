import "./Login.scss"
import {Link} from "react-router-dom"
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
  
    const validate = () => {
      const errors = {};
      if (!email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email address is invalid";
      }
      if (!password) {
        errors.password = "Password is required";
      } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      return errors;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      try {
        const response = await axios.post("https://reqres.in/api/login", {
          email,
          password,
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        setMessage("Login successful!");
      } catch (error) {
        setErrors({ login: "Invalid email or password" });
      }
    };
  return (
    <div className="form__wrapper">
            <form className="auth-form">
                 <input type="email" placeholder="Email" />
                 <input type="password" placeholder="Password" />
                  <button>Login</button>
                  <ul>
                     <li><Link to="/auth/register">Register</Link></li>
                  </ul>
            </form>
          
           
    </div>
  )
}

export default Login



