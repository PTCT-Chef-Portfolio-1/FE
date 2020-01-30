import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';
import RegisterPage from './Components/RegisterPage';


function App() {
  return (
    <div>
      <Route exact path ="/" component={Home} />
      <Route path ="/RegisterPage" component={RegisterPage} />
    </div>
    
  );
}

export default App;
