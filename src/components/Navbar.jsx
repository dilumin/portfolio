import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar-con'>
        <nav className='navbar'>
            <div className='navbar-logo'>
            <div style={{display:'flex' , justifyContent:"center"}}>
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1285 28.5873L10.5626 42.148L24.1285 55.7087L20.5 59.3373L5.125 43.9623V40.3337L20.5 24.9587L24.1285 28.5873ZM60.0035 24.9587L56.375 28.5873L69.9409 42.148L56.375 55.7087L60.0035 59.3373L75.3785 43.9623V40.3337L60.0035 24.9587ZM25.1535 66.625L29.7353 68.921L55.3603 17.671L50.7785 15.375L25.1535 66.625Z" fill="#424242"/>
                </svg>
            </div>
            </div>
            
            <ul className='navbar-links'>
                <li className='point' style={{fontWeight:'bold'}}><a href='#'>Me</a></li>
                <li className='point'><a href='#'>Education</a></li>
                <li className='point'><a href='#'>Projects</a></li>
                <li className='point'><a href='#'>Contact</a></li>
                <li className='point'><a href='#'>CV</a></li>

            </ul>
        </nav>
            

    </div>
  )
}

export default Navbar