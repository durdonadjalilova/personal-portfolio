import React from 'react'

const Contact = () => (
    <div className='contactSection'>
        <div className='contactText'>
            <p>Contact me! Please fill out the form with your message or reach me at suzetteislam@gmail.com and I'll get back as soon as possible.</p>
        </div>
        <form className='contact' action="https://formspree.io/xoqlkzqz" method="POST">
            <label for='name'>Name:</label>
            <input type='text' placeholder='name' name='name' />
            <br></br>
            <label for='email'>Email:</label>
            <input type="email" placeholder='email' />
            <br></br>
            <label for='message'>Message:</label>
            <input type="text" placeholder='message' />
            <br></br>
            <button>Send!</button>
        </form>
    </div>
)

export default Contact