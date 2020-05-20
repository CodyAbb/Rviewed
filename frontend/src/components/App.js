import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./navigation/NavBar";
import Hello from "./Hello";

export default function App() {
  const [authAllowed, setAuth] = useState(localStorage.getItem("access_token"));
  console.log(localStorage);

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path={"/login/"} component={Login} />
          <Route exact path={"/signup/"} component={SignUp} />
          <Route exact path={"/hello/"} component={Hello} />
          <Route path={"/"} render={() => <div>Home again</div>} />
        </Switch>
      </main>
    </div>
  );
}
