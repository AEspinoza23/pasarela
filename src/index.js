import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

//redux store
import { Provider } from 'react-redux'
import store from './redux/store/home'

import { BrowserRouter as Router } from 'react-router-dom'

import { BreakpointsProvider } from 'react-with-breakpoints';

//Routes
import AppRoutes from './Routes'

const breakpoints = {
  small: 468,
  medium: 800,
  large: 1250,
  xlarge: Infinity,
}

ReactDOM.render(
  <Provider store={store}>  
    <Router>
      <BreakpointsProvider breakpoints={ breakpoints }>
        <AppRoutes />
      </BreakpointsProvider>
    </Router>
  </Provider>,
  document.getElementById('root'));
