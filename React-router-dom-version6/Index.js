import { BrowserRouter } from "react-router-dom";
import reactDom from "react-dom";
import React from "react";
import App from "./App";
import reportWebVitals from './reportWebVitals';


// Create React App doesn't include page routing.
// React Router is the most popular solution.

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();