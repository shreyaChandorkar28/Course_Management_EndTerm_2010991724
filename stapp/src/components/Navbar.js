import React from 'react';
import { ReactDOM } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import logo from '../myworld.png';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar(){
    return(
        <div className='na'>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link class="navbar-brand" to="/">
      <img src={logo} alt="My World" width="30" height="30" borderRadius="10%"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/About">About us</Link>
        <Link className="nav-link" to="/Contact">Contact Us</Link>
        <Link className="nav-link" to="/Login">Login</Link>
        <Link className="nav-link" to="/Signup">Signup</Link>
        <Link className="nav-link" to="/StudentDetails">Details</Link>
        <Link className="nav-link" to="/PostForm">Post Form</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;