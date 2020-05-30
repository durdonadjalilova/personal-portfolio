import React from 'react'
import { Link, Route } from 'react-router-dom'

const NavBar = () => (
    <div>
        <nav className='nav'>
            {/* <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id='hamburger' /> */}
            
            <ul>
                <li><Link>About</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Skills</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

        </nav>
    </div>
)

export default NavBar