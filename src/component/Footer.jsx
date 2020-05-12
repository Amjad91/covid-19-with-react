import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


function Footer(){
    return (
  <div  style={{position:"relative", marginTop: '100px'}}>  <footer>
    <p className="footer-content">&copy; 2020 Amjad Developer</p>
    <a href="https://www.linkedin.com/in/amjad91-alghamdi"><LinkedInIcon style={{ fontSize: 30}}  /></a>
    <a href="https://github.com/Amjad91"><GitHubIcon /></a>
    <a href="https://twitter.com/aamjad_a"><TwitterIcon  /></a>
    
    </footer></div> 
    );
}


export default Footer;