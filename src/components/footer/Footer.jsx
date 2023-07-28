import React from "react";
import "./footer.css";
import {SiFacebook} from 'react-icons/si';
import {BsInstagram,BsTwitter} from 'react-icons/bs';



const Footer = () => {
  return(
    <footer>
      
      <div className="footer__social">
      
        <a href="https://www.facebook.com/" aria-label='social_links' name='facebook'><SiFacebook/></a>
        <a href="https://www.instagram.com/" aria-label='social_links' name='instagram' ><BsInstagram/></a>
        <a href="https://www.twitter.com/" aria-label='social_links' name='twitter'><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Thank You For Vist, created By  <a href="https://github.com/iamfaizandev" target="_blank" rel="noreferrer">Md Faizan Ahmad</a></small>
      </div>
      
    </footer>
  )
};

export default Footer;
