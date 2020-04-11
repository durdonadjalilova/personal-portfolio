import React from 'react'

const Contact = () => (
    <div className='contactSection' id='contact'>
        <div className='contactText'>
            <p>Contact me! <br></br>Please fill out the form with your message or reach me at suzetteislam@gmail.com.</p>
        </div>
        <div className='formholder'>
        <form className='contact' action="https://formspree.io/xoqlkzqz" method="POST">
            <label for='name'>Name:</label>
            <input type='text' placeholder='name' name='name' />
            <label for='email'>Email:</label>
            <input type="email" placeholder='email' />
            <br></br>
            <br/>
            <label for='message'>Message:</label>
            <input type="text" placeholder='message' />
            <br></br>
            <button>Send!</button>
        </form>
        </div>
       
    </div>
)

export default Contact