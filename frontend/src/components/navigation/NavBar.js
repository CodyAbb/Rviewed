import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosApi";

export default function NavBar({ authAllowed }) {
  const handleLogout = () => {
    axiosInstance
      .post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const authLinkChange = authAllowed ? () : ()

  return (
    <nav>
      <Link className={"nav-link"} to={"/"}>
        Home
      </Link>
      <Link className={"nav-link"} to={"/login/"}>
        Login
      </Link>
      <Link className={"nav-link"} to={"/signup/"}>
        Signup
      </Link>
      <Link className={"nav-link"} to={"/hello/"}>
        Hello
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
