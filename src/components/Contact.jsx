import React from 'react'

const Contact = () => (
    <div className='contactSection' id='contact'>
        <div className='contactText'>
            <h3>Contact me!</h3>
        </div>
        <div className='formholder'>
        <form className='contact' action="https://formspree.io/xoqlkzqz" method="POST">
            <label for='name'>Name:</label><br/>
            <input type='text' placeholder='name' name='name' /><br/>
            <label for='email'>Email:</label><br/>
            <input type="email" placeholder='email' /><br/>
            <br/>
            <label for='message'>Message:</label><br/>
            <input type="text" placeholder='message' />
            <br></br>
            <button>Send!</button>
        </form>
        </div>
       
    </div>
)

export default Contact