import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./navigation/NavBar";
import Hello from "./Hello";
import LandingPage from "./LandingPage";
import axiosInstance from "../axiosApi";

export default function App() {
  const [authAllowed, setAuth] = useState(localStorage.getItem("access_token"));
  const [username, setUsername] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/current_user/")
      .then((res) => setUsername(res.data.username))
      .catch((err) => console.log(`Username undefined: ${err}`));
  }, []);

  return (
    <div>
      <NavBar authAllowed={authAllowed} currentUsername={username} />
      <main>
        <Switch>
          <Route exact path={"/login/"} component={Login} />
          <Route exact path={"/signup/"} component={SignUp} />
          <Route exact path={"/hello/"} component={Hello} />
          <Route path={"/"} component={LandingPage} />
        </Switch>
      </main>
    </div>
  );
}
