import React from "react";

export default function SignedOutLinks() {
  return (
    <ul>
      <li>
        <Link className={"nav-link"} to={"/login/"}>
          Login
        </Link>
      </li>
      <li>
        <Link className={"nav-link"} to={"/signup/"}>
          Signup
        </Link>
      </li>
    </ul>
  );
}
