import React from 'react'
import projects from './Projects'


const cards = projects.map(el => {
   return (
        <div>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <a href={el.github}>GitHub </a>
            <a href={el.live}>Live</a>
        </div>

    )
})

const DisplayProjects = () => (
    <div className='projectsSection' id='projects'>
        <h1>PROJECTS</h1>
        <p>
            {cards}
        </p>
    </div>
)

export default DisplayProjects