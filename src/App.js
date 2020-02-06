import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/home';
import RegisterPage from './Components/RegisterPage';
import NavBar from './Components/NavBar';
import login from './Components/login'
import HomeSearch from './Components/home-search';
import Dashboard from './Components/dashboard';
import AddRecipe from './Components/addRecipe';

import PrivateRoute from './PrivateRoute'

function App() {
  return (
     <>
    <NavBar />
    <PrivateRoute path="/chefdashboard/:id" component={Dashboard} />
    <PrivateRoute path="/add" component={AddRecipe} />
    <Route exact path = "/Recipes" component ={HomeSearch} />      
    <Route exact path ="/" component={Home} />
    <Route exact path="/login" component={login} />
    <Route path ="/RegisterPage" component={RegisterPage} />
    </>
  );
}

export default App;
