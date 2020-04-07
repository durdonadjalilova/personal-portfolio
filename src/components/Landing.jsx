import React from 'react';
import Selfie from '../additional/selfie.jpeg'



const Landing = () => (
    <div className='landing' id='landing'>
        <div className='opening'> 
            <div className='intro'><h1>Hi! My name is...</h1></div>
            <div className='suzette'><h1>Suzette Islam</h1></div>
        </div>

        <div className='aboutImg'>
                <img src={Selfie} />
            </div>
        <a href='#about' >about</a>
    </div>
)

export default Landing