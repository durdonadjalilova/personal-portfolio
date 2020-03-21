import React from 'react'

const Contact = () => (
<div className='contactSection'>
    <div className='contactText'>
        <p>Please leave a message after the click!</p>
    </div>
    <form className='contact'>

        <input type="text" placeholder='email'/>
        <br></br>
        <input type="text" placeholder='message'/>
        <br></br>
       <a href ='mailto:suzetteislam@gmail.com'><button>Send!</button></a>
    </form>
</div>
)

export default Contact