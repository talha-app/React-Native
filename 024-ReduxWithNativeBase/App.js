import React, { Component } from "react";
import { allReducers } from "./reducers";
import Counter from "./components/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(allReducers);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    );
  }
}
