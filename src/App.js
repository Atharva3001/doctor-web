import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Search from './SearchBar/Search';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/search" exact component={Search} />
      </Router>
    </div>
  );
}

export default App;
