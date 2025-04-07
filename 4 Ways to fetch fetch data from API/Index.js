import App from "./App";
import reportWebVitals from "../React-router-dom-version6/reportWebVitals";

// createRoot lets you create a root to display React components inside a browser DOM node.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);


reportWebVitals();