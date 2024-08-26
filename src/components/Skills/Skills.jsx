import React from 'react'
import './Skills.css'
import react1 from './Assets/react-2.svg'
import css1 from './Assets/css-3.svg'
import js1 from './Assets/logo-javascript.svg'
import spring from './Assets/spring-3.svg'
import tailwind from './Assets/tailwindcss.svg'
import mySql from './Assets/mysql-3.svg'
import java from './Assets/java-4.svg'
import Azure from './Assets/azure.svg'
import AWS from './Assets/aws.svg'
import postgre from './Assets/postgresql.svg'
import arduino from './Assets/arduino-svgrepo-com.svg'
import python from './Assets/python-svgrepo-com.svg'
import c_plus_plus from './Assets/c-plus-plus-svgrepo-com.svg'
import git from './Assets/github-142-svgrepo-com.svg'
import figma from './Assets/figma-svgrepo-com.svg'
import node from './Assets/node-js-svgrepo-com.svg'

function Skills() {
  return (
    <div className='skill-con' id='Interests'>
        <div className='header'> My Skills and Interests </div>

        <div className="skill-con1">
          <div className="logos">
            <img className='logo1' src={node} alt="" />
            <img className='logo1' src={git} alt="" />
            <img className='logo1' src={figma} alt="" />
            <img className='logo1' src={c_plus_plus} alt="" />
            <img className='logo1' src={python} alt="" />
            <img className='logo1' src={arduino} alt="" />
            <img className='logo1' src={postgre} alt="" />
            <img className='logo1' src={AWS} alt="" />
            <img className='logo1' src={Azure} alt="" />
            <img className='logo1' src={react1} alt="" />
            <img className='logo1' src={css1} alt="" />
            <img className='logo1' src={js1} alt="" />
            <img className='logo1' src={spring} alt="" />
            <img className='logo1' src={tailwind} alt="" />
            <img className='logo1' src={mySql} alt="" />
            <img className='logo1' src={java} alt="" />

            

          </div>
        </div>



    </div>
  )
}

export default Skills