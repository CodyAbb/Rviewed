import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
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
    </nav>
  );
}
