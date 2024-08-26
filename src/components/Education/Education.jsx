import React from 'react'
import './Education.css'
import mora from './Mora.png'

function Education() {
  return (
    <div className='Edu-con' id='Education' >
        <div className="about">
            <div className="content">
           " I'm a Passionate Computer Science and Engineering undergraduate with a keen interest in AI, embedded systems, web development and cloud computing.  My passion lies in solving complex challenges and creating innovative, real-world solutions. With a strong foundation in technology and a creative mindset, I continuously strive to learn and evolve. I aim to blend cutting-edge technology with thoughtful design to build impactful digital experiences that make a meaningful difference. "
            </div>
        </div>
         <div className="uni">
            <div className="con">
                <div>
                <div className='uom'>University of Moratuwa</div>
                <div className='cs'>Computer Science and Engineering</div>
                <div className='un'>3rd Year Undergraduate</div>
                </div>
            </div>
            <div className="uni-pic">
               <img src={mora} alt="" />
            </div>
        </div> 

    </div>
  )
}

export default Education