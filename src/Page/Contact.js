import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [btnText, setBtnText] = useState('Submit');
  const form = useRef();

  const handleChange = (event) => {
    event.preventDefault()
    // console.log('event.target.name', event.target.name)
    // console.log(event.target.name, event.target.value)
    setFormState({...formState, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('formState: ', formState)
    emailjs.sendForm('JoeCoolEngineering', 'template_6f8qkd2', form.current, 'iORfQFQu1juuozACx')
    .then((result) => {
        console.log(result.text);
        setBtnText('Message Sent!')
        setTimeout(() => {
          window.location.reload();
        }, 3000)  
    }, (error) => {
        console.log(error.text);
        setBtnText('Error!')
    });
  }

  return (
    <form ref={ form } onSubmit={ handleSubmit }>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" name="name" className="form-control" placeholder="John Doe" defaultValue={ formState.name } onChange={ handleChange } />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" name="email" className="form-control" placeholder="John.Doe@example.com" defaultValue={ formState.email } onChange={ handleChange } />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea name="message" className="form-control" rows="4" placeholder="Enter Message Here" defaultValue={ formState.message } onChange={ handleChange } ></textarea>
      </div>

      <button type="submit" className="btn btn-primary mb-4">
        {btnText}
      </button>
    </form>
  )
}

export  default Contact