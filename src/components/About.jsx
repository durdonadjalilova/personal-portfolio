import React from 'react'
import Selfie from '../additional/selfie.jpeg'
import { Link } from 'react-router-dom'
import Resume from '../additional/resume.pdf'

const About = () => (
    <div className='header'>
        <div className='intro'><h1>Hi! My name is Suzette.</h1></div>
        <div className='aboutSection'>
            <div className='aboutImg'>
                <img src={Selfie} />
            </div>
            <div className='aboutTxt'>
                <p>I am a full stack web developer based in NYC.</p>
                <p>con</p>
                <p>lksd</p>

                <div className='links'>
                    <Link>GitHub</Link>
                    <Link>LinkedIn</Link>
                    <Link to={Resume}>Resume</Link>
                </div>

            </div>
        </div>

    </div>
)

export default About