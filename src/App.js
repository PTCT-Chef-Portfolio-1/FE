import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';

import RegisterPage from './Components/RegisterPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
    <NavBar />
      <Route exact path ="/" component={Home} />
      <Route path ="/RegisterPage" component={RegisterPage} />
    </div>
    

  );
}

export default App;
