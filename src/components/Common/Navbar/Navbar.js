import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  const {isLoggedIn,userName,role} = props.loginInfo;
  
  const logout=()=>{
    if (window.confirm('Do you want to logout?')) {
      window.localStorage.setItem('userId',"");
      window.localStorage.setItem('userName',"");
      window.localStorage.setItem('role',"");
      window.location.replace('/');
    } else {

    }
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <div className="container">
        <a className="navbarbrand" href="/">
          COnnectify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        icon
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            
            {isLoggedIn?<li className="nav-item">
              <p className="main-text p-nav">Welcome <span>{userName}</span>!</p>
            </li>:null
            }
            {isLoggedIn?<li className="nav-item"><button className="btnDanger" onClick={logout}>logout</button></li>:
            <li className="nav-item"><Link 
            to="/login"
            className="nav-link" 
            >Login</Link></li>
              }
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
