import React, { Component } from "react";
import { allReducers } from "./reducers";
import LoginForm from "./components/LoginForm";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(allReducers);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
  }
}
