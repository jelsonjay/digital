import React from "react"
import Title from "../components/Title"
//import SEO from '../components/SEO'

const Contact = () => {
  return <>

  <section className='contact-page'>
  <Title title='Contact Us' />
  <article className='contact-form'>
  <h3>get in touch</h3>
  <form action="https://formspree.io/f/xeqpawkd" method="POST">
  <div className='form-group'>
  <input type='text' name='name' placeholder='your fullname' className='form-control'/>
  <input type='email' name='email' placeholder='your email' className='form-control'/>
  <input type='email' name='email' placeholder='subject' className='form-control'/>
  <textarea name='message' rows='5'placeholder='message' className='form-control'/>
  </div>
  <button type='submit' className='submit-btn btn'> submit</button>
  </form>
  </article>
  </section>
</>
}

export default Contact
