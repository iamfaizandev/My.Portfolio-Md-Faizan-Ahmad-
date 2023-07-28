import React from "react";
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si';


const HeaderSocials = () => {
  return <div className="header__socials">
    <a href="https://github.com/iamfaizandev?tab=repositories&q=&type=&language=&sort=name" target='_blank'rel="noreferrer"><BsGithub/></a>
    <a href="mailto:md.faizan.ahmad.web@gmail.com" target='_blank' rel="noreferrer"><AiOutlineMail/></a>
    <a href="https://wa.me/917563092029" target='_blank' rel="noreferrer"><SiWhatsapp/></a>
     

  </div>;
};

export default HeaderSocials;
