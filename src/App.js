import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';
import RegisterPage from './Components/RegisterPage';
import NavBar from './Components/NavBar';
import login from './Components/login'

function App() {
  return ( <>
    <NavBar />         
    <Route exact path ="/home" component={Home} />
    <Route exact path="/login" component={login} />
    <Route path ="/RegisterPage" component={RegisterPage} />
    </>
  );
}

export default App;
