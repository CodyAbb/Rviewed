import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path={"/login/"} component={Login} />
          <Route exact path={"/signup/"} component={SignUp} />
          <Route path={"/"} render={() => <div>Home again</div>} />
        </Switch>
      </main>
    </div>
  );
}
