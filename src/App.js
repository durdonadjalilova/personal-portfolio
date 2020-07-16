import React from 'react';
import './App.css';
import Skills from './components/Skills';
import projects from './components/Projects'
import Skyline from './additional/nyc.png'
import Selfie from './additional/Selfie.png'
import Logo from './additional/white-logo.png'

const cards = projects.map(el => {
  return (
    <div className='project-card'>
      <img src={el.img} alt='project' />
      <div className='back-card'>
        <div>
          <h2>{el.title}</h2>
        </div>
        <div>
          <p>{el.description}</p>
        </div>
        <div>
          <a href={el.github}>GitHub</a>
          <a href={el.live}>Live</a>
        </div>

      </div>

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
        <div className='logo'><a href='/#landing'><img src={Logo} id='si' alt='logo' style={{ marginLeft: '10px', height: '50px', marginTop: '5%' }} /></a></div>
        <ul>
          <li><a href='#About'>about</a></li>
          <li><a href='#Projects'>projects</a></li>
          <li><a href='https://docs.google.com/document/d/1olqMt-NTNXJhUp2B9XQXgX8z_4Pnz5Cs1PKyxLAmZvM/edit?usp=sharing' rel='noopener noreferrer' target='_blank'>resume</a></li>
          <li><a href='#Contact'>contact</a></li>
        </ul>
      </div>
      <div className='landing' id='landing'>
        <h1 id='greeting' style={{ fontWeight: 'bold' }}>Suzette Islam</h1>

        <img src={Skyline} id='skyline' alt='landing' />

      </div>

      <div className='aboutSection' id='About'>
        <h1 style={{ textDecoration: 'underline', textDecorationColor: '#EB9605', fontSize: '40px' }}>About Me</h1> <br />

        <div className='about-container'>
          <div id='img'>
            <img src={Selfie} alt='suzette' className='aboutImg' />
          </div>

          <div id='txt' >
            <p>Hey everyone! I'm Suzette, a full stack web developer based in New York City. My journey in tech began when I was introduced to HTML and CSS in middle school. This experience was one that I kept in the back of my mind until I reached college. While I was unable to obtain a Computer Science degree I did extensive research to ensure I accomplished my goal afterwards. I later found Pursuit and was admitted as a Full Stack Web Development Fellow. I am excited to continue learning about the industry and look forward to starting a new chapter as a web developer. Please check out my projects below and feel free to contact me via email at <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>suzetteislam@gmail.com</span> or by filling out the contact form below! </p>
            <div className='links' >
              <svg viewBox="0 0 128 128" className='icon' onClick={linkedIn}>
                <path id="plain" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"></path>
              </svg>
              {/* <img src="https://img.icons8.com/color/48/000000/linkedin.png" className='icon' alt='icon' onClick={linkedIn} /> */}
              <svg viewBox="0 0 128 128" className='icon' onClick={github}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
              {/* <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" className='icon' alt='icon' onClick={github} /> */}

            </div>
          </div>

        </div>

        <div className='skills'>
          <div><h3 id='technologies' style={{ textDecoration: 'underline', textDecorationColor: '#EB9605', fontSize: '22px' }}>Technologies I've worked with:</h3></div>
          <br />
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
            <textarea placeholder='Message' className='message' ></textarea>
            {/* <input type="textarea" placeholder='Message' className='message' /> */}
            <br></br>
            <button style={{ backgroundColor: '#EB9605', fontSize: '18px', width: '250px', border: '1px black double', fontFamily: 'Judson, serif', fontWeight: 'bold' }}>Send!</button>
          </form>
        </div>
      </div>

      <div className='footer' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ marginLeft: '2%' }}>© Suzette Islam</p>
        <p style={{ marginRight: '2%' }}>Thank you for visiting!</p>
      </div>

    </div>
  );
}

export default App;
