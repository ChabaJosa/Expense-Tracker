import React                              from 'react';
import {GlobalProvider}                   from "./context/GlobalState"
import { Route, Switch, BrowserRouter }   from "react-router-dom";

import Home                               from "./components/LandingPage/html5up-dimension/Home"
import Tracker                            from "./components/ExpenseTracker"

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => {

  // Fixed the heroku deployment issue with this link https://stackoverflow.com/questions/44319832/react-app-runs-locally-crashes-when-on-heroku-error-code-h10

  return (
    // It all must be wrapped in the Global Provider to access the Global State value
    <GlobalProvider>

    <BrowserRouter basename='/'>
      <div>
        <Switch>
          <Route exact path="/"   component={Home} />
          <Route path="/tracker"  component={Tracker} />
        </Switch>
       
      </div>
    </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;
