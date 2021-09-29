import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Title from "./component/Title";
import App from "./component/App";
import Icon from "./component/Icon";
import Copyright from "./component/Copyright";
import reportWebVitals from "./reportWebVitals";
import theme from "./data/theme.json";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Title />
    </header>
    <main>
      <App data={theme} />
      <Icon />
    </main>
    <footer>
      <Copyright />
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
