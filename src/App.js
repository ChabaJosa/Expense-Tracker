import React                              from 'react';
import {GlobalProvider}                   from "./context/GlobalState"
import { Route, Switch, BrowserRouter }   from "react-router-dom";

import Home                               from "./components/LandingPage/html5up-dimension/Home"
import Tracker                            from "./components/ExpenseTracker"

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => {


  return (
    // It all must be wrapped in the Global Provider to access the Global State value
    <GlobalProvider>

      {/* <Router basename="/#">
        <Switch>
          <Route path="/tracker" 
            render={(props) =>  <Tracker  {...props}  />}  />
          <Route path="/home"             
            render={(props) =>  <Home     {...props}  />} />
        </Switch>
      </Router> */}

    <BrowserRouter basename='/'>
      <div>
        {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tracker">App</Link></li>
        </ul> */}
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
