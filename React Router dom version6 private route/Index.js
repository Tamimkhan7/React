import { BrowserRouter } from "react-router-dom";
import reactDom from "react-dom";
import React from "react";
import App from "./App";
import reportWebVitals from './reportWebVitals';

// To maintain clean routes in a React application that use BrowserRouter
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();