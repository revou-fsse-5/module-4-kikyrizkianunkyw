import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Mengimpor Tailwind CSS dan styling global
import App from "./App";

// Inisialisasi root React di dalam elemen dengan id 'root'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css"; // Import Tailwind CSS styles
// import App from "./App";
// import Register from ".pages/Register";
// import Login from "./pages/Login";
// import category from "./pages/Login";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route path="/register" component={Register} />
//       <Route path="/login" component={Login} />
//       <Route path="/category" component={Category} />
//       <Route path="/" component={App} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
