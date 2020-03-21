import React from 'react'
import Css from '../additional/skills/css3.png' 
import Git from '../additional/skills/git.png'
import Github from '../additional/skills/github.png'
import Javascript from '../additional/skills/javascript.png'
import Node from '../additional/skills/node.png'
import ReactLogo from '../additional/skills/react.png'
import Html from '../additional/skills/html.png'

const Skills = () => (
    <div className='skillsSection'>
        <div className='skillsText'>
        <h1>SKILLS</h1>
        <p></p>
        </div>

        <div className = 'skillsIcon'>
            <img src = {Html} alt = 'html' className ='icon' />
            <img src = {Css} alt = 'css' className='icon'/>
            <img src = {Git} alt = 'git' className='icon' />
            <img src = {Github} alt = 'github' className='icon' />
            <img src = {Javascript} alt= 'javascript' className='icon' />
            <img src = {Node} alt='node' className='icon' />
            <img src ={ReactLogo} alt ='react' className='icon' />

        </div>

    </div>
)

export default Skills