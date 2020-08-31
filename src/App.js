import React from 'react';
import History from './views/History';
import Home from './views/Home';
import P404 from './views/P404';
import Newopp from './views/Newopp';
import Navbar from './components/Navbar';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/newopp/:op/:tipo">
            <Newopp />
          </Route>
          <Route path="*">
            <P404></P404>
          </Route>
      </Switch>
    </Router>

  );
}

export default App;
