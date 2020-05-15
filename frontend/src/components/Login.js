import React, { useState } from "react";
import axiosInstance from "../axiosApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This is the original axios firing off to get access and refresh tokens
    axiosInstance
      .post("/token/obtain/", {
        email: email,
        password: password,
      })
      .then((result) => {
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + result.data.access;
        // console.log(result.data.access);

        localStorage.setItem("access_token", result.data.access);
        localStorage.setItem("refresh_token", result.data.refresh);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}
