import React                              from 'react';
import {GlobalProvider}                   from "./context/GlobalState"
import { Route, Switch, BrowserRouter }   from "react-router-dom";
import Home                               from "./components/LandingPage/html5up-dimension/Home"
import Tracker                     from "./components/ExpenseTracker"

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => {


  return (
    // It all must be wrapped in the Global Provider to access the Global State value
    <GlobalProvider>

      <BrowserRouter>
        <Switch>
          <Route exact path="/tracker" 
            render={(props) =>  <Tracker  {...props}  />}  />
          <Route exact path="/"             
            render={(props) =>  <Home     {...props}  />} />
        </Switch>
      </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;
