import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [marginBottom, setMarginBottom] = useState('0px'); 

  useEffect(() => {
    const handleScroll = () => {
      const pixelsToBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

      if (pixelsToBottom < 200) {
        setMarginBottom(`${200 - pixelsToBottom}px`);
      } else {
        setMarginBottom('0px');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Log the initial value
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    const scrollToSection = (a) => {
      document.getElementById(a).scrollIntoView({
        behavior: 'smooth',
      });
    };
  

  return (
    <div className='navbar-con'>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.1285 28.5873L10.5626 42.148L24.1285 55.7087L20.5 59.3373L5.125 43.9623V40.3337L20.5 24.9587L24.1285 28.5873ZM60.0035 24.9587L56.375 28.5873L69.9409 42.148L56.375 55.7087L60.0035 59.3373L75.3785 43.9623V40.3337L60.0035 24.9587ZM25.1535 66.625L29.7353 68.921L55.3603 17.671L50.7785 15.375L25.1535 66.625Z" fill="#424242" />
            </svg>
          </div>
        </div>

        <ul className='navbar-links' style={{ marginBottom: marginBottom }}>
          <li className='point' onClick={()=> scrollToSection("Me")} ><div>Me</div></li>
          <li className='point' onClick={()=>scrollToSection("Education")} ><div>Education</div></li>
          <li className='point' onClick={()=>scrollToSection("Projects")} ><div>Projects</div></li>
          <li className='point' onClick={()=>scrollToSection("Interests")} ><div>Interests</div></li>
          <li className='point' onClick={()=>scrollToSection("Contact")} ><div>Contact</div></li>
          <li className='point' onClick={() => window.location.href ="https://drive.google.com/uc?export=download&id=1YiRs1TcQ84uSEr0MCwRU8M8nCdyFO0pF" } ><div>CV</div></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
