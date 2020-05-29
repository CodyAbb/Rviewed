import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosApi";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default function NavBar({ authAllowed, currentUsername }) {
  const authLinkChange = authAllowed ? (
    <SignedInLinks currentUsername={currentUsername} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <nav>
      <Link className={"nav-link"} to={"/"}>
        Home
      </Link>
      {authLinkChange}
    </nav>
  );
}
