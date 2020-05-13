import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function App() {
  return (
    <div>
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
