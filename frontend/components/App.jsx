import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./form/signup_form_container";
import LoginFormContainer from "./form/login_form_container";
import BenchIndexContainer from "./bench/bench_index_container";

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;