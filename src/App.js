import React from 'react';
import { Landing,History,Home,P404,Newopp } from './views';
import Navbar from './components/Navbar';
import AuthContextProvider from './contexts/AuthContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Landing/>
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
      </AuthContextProvider>
    </Router>

  );
}

export default App;
