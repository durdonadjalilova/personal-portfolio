import React from 'react'
import Resume from '../additional/resume.pdf'
import Selfie from '../additional/selfie.jpeg'
import Skyline from '../additional/nyc.png'

const About = () => {

    const linkedIn = () => {
        const url = 'https://www.linkedin.com/in/suzetteislam'
        window.open(url, '_blank')
    }

    const github = () => {
        const url = 'https://www.github.com/sislam16'
        window.open(url, '_blank')
    }

    // const resume =() =>{
    //     const url = {Resume}
    //     window.open(url, '_blank')
    // }

    return (
        <div className='aboutSection' id='about'>
            <img src={Selfie} alt='suzette'className='aboutImg' />

            <div className='abtTxt'>
                <p>I'm a full stack web developer based in New York City. </p>
                <div className='links'>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='icon' onClick={linkedIn} />
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" alt='icon' onClick={github}/>
                    <a href={Resume} target='_blank'><img src="https://img.icons8.com/windows/40/000000/file.png" alt ='file'/></a>

                </div>
            </div>
            <img src={Skyline} id='skyline' alt='landing' />
        </div>
    )
}

export default About