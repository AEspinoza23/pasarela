import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { BreakpointsProvider } from 'react-with-breakpoints';

const breakpoints = {
  small: 468,
  medium: 768,
  large: 1024,
  xlarge: Infinity,
}

ReactDOM.render(
  <BreakpointsProvider breakpoints={ breakpoints }>
    <App />
  </BreakpointsProvider>, 
  document.getElementById('root'));
