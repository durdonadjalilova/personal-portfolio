import React from 'react';
import {Link} from 'react-router-dom'



const Landing = () => (
    <div className='landing'>
        <h2>Hi, my name is</h2>
        <h1 className='name'>Suzette Islam</h1>
        <Link to='about'>Welcome -></Link>
    </div>
)

export default Landing