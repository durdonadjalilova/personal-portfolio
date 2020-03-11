import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Site = () => (
    <div className='main'>
        <div className='aboutMe'>
            <About />
        </div>

        <div className='portfolio-projects'>

        </div>
        <div className ='skills-known'>

        </div>

        <div className='contact-form'>
            <Contact/>
        </div>

        <div className ='site-footer'>
            <Footer/>
        </div>
    </div>
)

export default Site