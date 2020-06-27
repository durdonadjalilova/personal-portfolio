import React from 'react';
import './App.css';
import Skills from './components/Skills';
import Slogo from './additional/si.png';
import projects from './components/Projects'
import Resume from './additional/resume.pdf'
import Skyline from './additional/nyc.png'
import Selfie from './additional/Selfie.png'

const cards = projects.map(el => {
  return (
    <div className='project-card'>
      <h4>{el.title}</h4>
      <p>{el.description}</p>
      <a href={el.github}>GitHub </a>
      <a href={el.live}>Live</a>
    </div>

  )
})

function App() {
  const linkedIn = () => {
    const url = 'https://www.linkedin.com/in/suzetteislam'
    window.open(url, '_blank')
  }

  const github = () => {
    const url = 'https://www.github.com/sislam16'
    window.open(url, '_blank')
  }

  return (
    <div className="App">
      <div className='nav'>
        <div className='logo'><img src={Slogo} id='si' alt ='logo'/></div>
        <ul>
          <li><a href='#About'>about</a></li>
          <li><a href='#Projects'>projects</a></li>
          <li><a href={Resume} rel ='noopener noreferrer' target='_blank'>resume</a></li>
          <li><a href='#Contact'>contact</a></li>
        </ul>
      </div>
      <div className='landing' id='landing'>
        <h1 id='greeting' style={{ fontWeight: 'bold' }}>Suzette Islam</h1>
        <div className='links'>
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='icon' onClick={linkedIn} />
          <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" alt='icon' onClick={github} />
          {/* <a href={Resume} rel ='noopener noreferrer' target='_blank'><img src="https://img.icons8.com/windows/40/000000/file.png" alt='file' /></a> */}

        </div>
        <img src={Skyline} id='skyline' alt='landing' />

      </div>

      <div className='aboutSection' id='About'>
        <h1 style={{ textDecoration: 'underline', textDecorationColor: '#EB9605', fontSize: '40px' }}>About Me</h1> <br/>

        <div className='about-container'>
          <div id='img'>
          <img src={Selfie} alt='suzette' className='aboutImg' />
          </div>

          <div id='txt'>
          <p>Hey everyone! I'm Suzette, a full stack web developer based in New York City. My journey in tech began when I was exposed to HTML and CSS in middle school. This interest was one that I kept in the back of my mind until I reached college. While I was unable to obtain a Computer Science degree I did extensive research to ensure I accomplished my goal afterwards. I later found Pursuit and was admitted as a Full Stack Web Development Fellow. I am excited to continue learning about the industry and look forward to starting a new chapter as a web developer. Please check out my project below and feel free to contact me via email at <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>suzetteislam@gmail.com</span> or by filling out the contact form below! </p>
          </div>
       
        </div>

        <div className='skills'>
          <h3 id='technologies' style={{ textDecoration: 'underline', textDecorationColor: '#EB9605', fontSize: '22px' }}>Technologies I've worked with:</h3>
          <Skills />
        </div>
      </div>

      <div className='projects-container' id='Projects'>
        <h1 style={{ textDecoration: 'underline', textDecorationColor: '#EB9605', fontSize: '40px' }}>Projects</h1>
        <div className='projects'>
          {cards}
        </div>
      </div>


      <div className='contact-form' id='Contact'>
        <h1 style={{ textDecoration: 'underline', textDecorationColor: '#EB9605', fontSize: '40px' }}>Contact</h1>
        <div className='formholder'>
          <form className='contact' action="https://formspree.io/xoqlkzqz" method="POST">
            <input type='text' placeholder='Name' name='Name' /><br />
            <input type="email" placeholder='Email' /><br />
            <input type="text" placeholder='Message' className='message' />
            <br></br>
            <button style={{ backgroundColor:'#EB9605', fontSize:'18px', width:'250px', border:'1px black double', fontFamily:'Judson, serif', fontWeight: 'bold' }}>Send!</button>
          </form>
        </div>
      </div>


      {/* <About />*/}

      <div className='footer'>
        <img src={Slogo} id='si' alt ='logo'/>
        <h3>Suzette Islam</h3>
      </div>

    </div>
  );
}

export default App;
