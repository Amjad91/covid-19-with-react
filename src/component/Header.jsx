import React from "react";
import HomeIcon from '@material-ui/icons/Home';

function Header(){
    return (
   <div style={{marginTop: '90px'}}> 
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top z-depth-5">
    <a className="navbar-brand" href="#">
    COVID-19 KSA</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#cases">Covid Cases <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#chartInfo">Total Cases</a>
        <a className="nav-item nav-link" href="#info">Covid-19 info</a>
        <a className="nav-item nav-link disabled" href="#Appinfo">Apps</a>
      </div>
    
    </div>
    <span  style={{color: '#90caf9', float: "right"}}><HomeIcon />Stay Home</span> 
  </nav></div>)
}

export default Header;