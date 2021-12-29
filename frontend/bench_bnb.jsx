import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js"
import Root from "./components/root";

import * as SessionAPIUTIL from "./util/session_api_util.js"
import { fetchBenches } from "./actions/bench_actions"

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START ---------------------
  window.signup = SessionAPIUTIL.signup;
  window.login = SessionAPIUTIL.login;
  window.logout = SessionAPIUTIL.logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchBenches = fetchBenches;
  // TESTING END ------------------------

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});