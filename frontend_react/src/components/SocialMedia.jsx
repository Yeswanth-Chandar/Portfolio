import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div onClick={() => window.open('https://github.com/Yeswanth-Chandar/')}>
      <BsGithub />
    </div>
    <div onClick={() => window.open('http://www.linkedin.com/in/yeswanth-chandar/')}>
      <FaLinkedinIn />
    </div>
    <div onClick={() => window.open('https://www.instagram.com/yeswanth_chandar/')}>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
