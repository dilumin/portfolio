import React from 'react'
import './Education.css'
import ScrollingSideway from '../ScrollingSideway';
import mora from './Mora.png'

function Education() {
  return (
    <div className='Edu-con'>
        <div className="about">
            <div className="content">
           " I'm a Passionate Computer Science and Engineering undergraduate with a keen interest in AI, embedded systems, web development and cloud computing.  My passion lies in solving complex challenges and creating innovative, real-world solutions. With a strong foundation in technology and a creative mindset, I continuously strive to learn and evolve. I aim to blend cutting-edge technology with thoughtful design to build impactful digital experiences that make a meaningful difference. "
            </div>
        </div>
        <div className="uni">
            <div className="con">
                <div>
                <h1>University of Moratuwa</h1>
                <h2>Computer Science and Engineering</h2>
                <h3>3rd Year Undergraduate</h3>
                </div>
            </div>
            <div className="uni-pic">
               <img src={mora} alt="" />
            </div>
        </div>
        {/* <ScrollingSideway /> */}

    </div>
  )
}

export default Education