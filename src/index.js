import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import AsyncValidationForm from "./AsyncValidationForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h3>form Validation using Angular or react</h3><br></br>
      <h4>form validation...</h4>
      
      <AsyncValidationForm onSubmit={showResults} />
      <Values form="asyncValidation" />
    </div>
  </Provider>,
  rootEl
);
