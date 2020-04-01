import React from 'react'
import Selfie from '../additional/selfie.jpeg'
import { Switch, Route, Link } from 'react-router-dom'
import Resume from '../additional/resume.pdf'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => (
    
        <div className='aboutSection'>
        <div className='intro'><h1>Hi! My name is Suzette.</h1></div>
            <div className='aboutImg'>
                <img src={Selfie} />
            </div>
            <div className='aboutTxt'>
                <p>I am a full stack web developer based in NYC.</p>
                {/* <p>con</p>
                <p>lksd</p> */}

                <div className='links'>
                    <p>hi</p>

                    {/* <i class="fab fa-github" hred='https://www/github.com/sislam16' target='_blank'></i> */}


                    {/* <a href="https://www.github.com/sislam16" target="_blank" className='aboutIcon'><FontAwesomeIcon className='icon' icon={['fab', 'github']} /></a>
                    <a href="https://www.linkedin.com/in/suzetteislam" target="_blank" className='aboutIcon'><i className="fab fa-linkedin"></i></a>
                    <a href={Resume} target="_blank" className='aboutIcon'><i className="fas fa-file-alt"></i></a>
            */}</div> 

            </div>
        </div>
)

export default About