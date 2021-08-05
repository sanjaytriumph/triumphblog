import React, {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import LoggedinContext from '../loggedin-context';

const NavBar = function(){
  const { loggedin, setLoggedin } = useContext(LoggedinContext);
  //const [loggedIn, setLoggedIn] = useState();

  //let loggedInVal = sessionStorage.getItem('loggedin');

  // useEffect(() =>{
  //   setLoggedIn(loggedInVal);
  // },[loggedIn])

  // console.log(loggedIn);
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
               
                {
                  (loggedin == 'true')?
                  <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
                  :''
                }
                
                <li className="nav-item">
                  {
                    (loggedin == 'true')?
                    <Link className="nav-link" to="/logout">Logout</Link>                    
                    :
                    <Link className="nav-link" to="/login">Login</Link>
                  }                
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
}


export default NavBar