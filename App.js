import React from "react";
import Home from "./screens/Home";
import styled from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  action: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return { action: "closeModal" };
      break;

    case "OPEN_MODAL":
      return { action: "openModal" };
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
