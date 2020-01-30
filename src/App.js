import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Route exact path ="/" component={Home} />
    </>
  );
}

export default App;
