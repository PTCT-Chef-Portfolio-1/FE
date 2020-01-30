import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';

import NavBar from './Components/NavBar';
import login from './Components/login'

function App() {
  return ( <>
    <NavBar />         
    <Route exact path ="/" component={Home} />
    <Route exact path="/login" component={login} />
    </>
  );
}

export default App;
