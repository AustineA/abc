import React from "react";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  isOpen: false,
  letter: require("./assets/Letter_A.png"),
  audio: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false
      };

    case "OPEN_MODAL":
      return {
        letter: action.payload.letter,
        isOpen: true,
        audio: action.payload.audio
      };

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
