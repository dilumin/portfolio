import React from 'react';
import './Footer.css';
import github from './github.svg';
import linkedin from './linkedin-icon.svg';
import instagram from './instagram.svg';

function Footer() {
  return (
    <div className='footer-con'>
      <div className="social-con">
        <div className='social'>
          <div className='log'>
            <img
              className='logs'
              onClick={() => { window.location.href = 'https://www.github.com/dilumin'; }}
              src={github}
              alt="GitHub"
            />
            <img
              className='logs'
              onClick={() => { window.location.href = 'https://www.linkedin.com/in/shyamal-de-silva'; }}
              src={linkedin}
              alt="LinkedIn"
            />
            <img
              className='logs'
              onClick={() => { window.location.href = 'https://www.instagram.com/de_dilumin?igsh=dnVkZHh0ZjF4dmQw&utm_source=qr'; }}
              src={instagram}
              alt="Instagram"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-text">
          © 2024 Shyamal De Silva. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
