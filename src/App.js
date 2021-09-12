import React from 'react';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link ,Redirect  } from "react-router-dom";
import P404 from './View/Pages/P404';
import Login from './View/Pages/Login';
import index from './Layout/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=> { 
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/index" component={index} />
        <Route path="*" component={P404} />
      </Switch>
    </Router>
      </div>
  );
}

export default App;
