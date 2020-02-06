import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

function Nav() {

  const histroy = useHistory();
  const token = localStorage.getItem('token');

  const signOut = () => {
    localStorage.clear();
    localStorage.removeItem("reload");
    window.location.reload();
  }

  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <nav className={loggedIn ? "logged" : "out"}>
        <Link to={`/chefdashboard/${localStorage.getItem("userId")}`}>
          <img className="logo" src={require("../images/chef.jpg")} />
        </Link>
        <div className="links">
          <Link className="link" to={`/chefdashboard/${localStorage.getItem("userId")}`}>
            Profile
          </Link>
          <Link className="link" to="/guestdashboard">Recipes</Link>
          <Link className="link" to="/add-recipe">Create Recipe</Link>
        </div>
        <div className="sign-in-nav-button">
          <Link
            to="/login"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Link>
        </div>
      </nav>

      <nav className={!loggedIn ? "logged" : "out"}>
        <Link to="/home">
          <img className="logo" src={require("../images/chef.jpg")} />
        </Link>
        <div className="links">
          <Link className="link" to="/recipes">Recipes</Link>
          <Link className="link" to="/login">Sign In</Link>
          <Link className="link" to="/home">Home</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
