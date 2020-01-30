import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';
import login from './Components/login'

function App() {
  return ( <>
    <Route exact path ="/" component={Home} />
    <Route path="/login" component={login} />
    </>
  );
}

export default App;
