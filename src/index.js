import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import { BrowserRouter as Router } from 'react-router-dom'

import { BreakpointsProvider } from 'react-with-breakpoints';

//Routes
import AppRoutes from './Routes'

const breakpoints = {
  small: 468,
  medium: 800,
  large: 1024,
  xlarge: Infinity,
}

ReactDOM.render(
  <Router>
    <BreakpointsProvider breakpoints={ breakpoints }>
      <AppRoutes />
    </BreakpointsProvider>
  </Router>,
  document.getElementById('root'));
