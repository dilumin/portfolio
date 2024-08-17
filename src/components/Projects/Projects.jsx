import React from 'react'
import './Projects.css'
import github from './github.png'


function Projects() {
  return (
    <div className='project-con'>

        <div className="name1">
          Projects
        </div>
        <div className="projects">
          <div className="project-1">
            <div className="project-name">
              MoraUxplore <br /> Web
            </div>
            <div className="project-desc">
              This is a web application that I worked as a project manager and developer. It is a platform for a competition organized by IEEE of University of Moratuwa. The platform is used to submit the projects and to evaluate them. The platform is developed using React.js , Node Js and MySQL. 
            </div>
            <div className='but-con'>
              <button className="button-27" > <div style={{paddingRight: "15px" , fontSize: "13px" ,paddingTop:"5px"}}>  Check on Github</div> 
                <img src={github} alt="" />
              </button>
              <button style={{marginTop:"15px"}} className="button-27" > <div style={{fontSize: "13px" ,paddingTop:"5px" }}>  Demonstate</div> 
              </button>


            </div>
            
          </div>
          <div className="project-2">
          <div className="project-name">
              Banking System
            </div>
            <div className="project-desc">
              This Web based system is developed for a bank to manage their customers and accounts. The system is developed using flask and MySQL. The primary target was to make the system safe therefore no javascript is used in the front end. This was for a university project with a team of 4 members. I was responsible for development of certain backend functionalities , database design and most of the UI frontend designs.
            </div> 

            <button className="button-27" > <div style={{paddingRight: "15px" , fontSize: "13px" ,paddingTop:"5px"}}>  Check on Github</div> 
              <img src={github} alt="" />
            </button>
            
          </div>
          <div className="project-3">

          <div className="project-name">
              Online Secure Chat <br /> Application
            </div>
            <div className="project-desc">
              This was a personal Project that I am working on to make reliable chat application. The application is developed using React.js , Node Js , MySQL and Socket.io . I started this project as a way to learn websockets and to improve my skills .
            </div>

            <button className="button-27" > <div style={{paddingRight: "15px" , fontSize: "13px" ,paddingTop:"5px"}}>  Check on Github</div> 
              <img src={github} alt="" />
            </button>            
          </div>
        </div> 
        <div className="contact-me-con">
          <div className="name1">
            Contact Me
          </div>
          <form action="https://send.pageclip.co/Hhcols3UuHsRnepkm7rek1zSHCOxlzZH" className="contact" method="post">


            <input type="text" className='input' name="name" placeholder="Name" />
            <input type="email" className='input' name="email" placeholder="Email" />
            <input type="text" className='input' name="message" placeholder="Message" style={{height: "6em", marginBottom:"30px"}} />
            

            <button type="submit" class="pageclip-form__submit">
              <span>Send</span>
            </button>
          </form>

        </div>
        
    </div>
  )
}

export default Projects