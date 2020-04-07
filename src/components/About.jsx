import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Resume from '../additional/resume.pdf'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Skyline from '../additional/nyc.png'

const About = () => (
    
        <div className='aboutSection' id='about'>
            
            <div className='aboutTxt'>
                <p>I'm a full stack web developer based in New York City. Coding is a new form of art and software engineers are the modern day artist. 
                    
                </p>
                {/* <p>con</p>
                <p>lksd</p> */}

                <div className='links'>
                    <p>hi</p>

                    {/* <i class="fab fa-github" hred='https://www/github.com/sislam16' target='_blank'></i> */}


                    {/* <a href="https://www.github.com/sislam16" target="_blank" className='aboutIcon'><FontAwesomeIcon className='icon' icon={['fab', 'github']} /></a>
                    <a href="https://www.linkedin.com/in/suzetteislam" target="_blank" className='aboutIcon'><i className="fab fa-linkedin"></i></a>
                    <a href={Resume} target="_blank" className='aboutIcon'><i className="fas fa-file-alt"></i></a> */}
           </div> 

            </div>
            <a href='#projects'>Projects</a>
            <img src = {Skyline} id='skyline'/>

        </div>
)

export default About