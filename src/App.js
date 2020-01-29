import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';

function App() {
  return (
    <Route exact path ="/" component={Home} />
  );
}

export default App;
