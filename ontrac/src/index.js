import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PDtracker from "./components/PDtracker";
import reportWebVitals from "./reportWebVitals";
import StudentProfile from "./components/StudentProfile"
import ViewProfile from "./components/ViewProfile"

ReactDOM.render(
  <React.StrictMode>
   {/* <PDtracker /> */}
   <StudentProfile />
    <ViewProfile /> 
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
