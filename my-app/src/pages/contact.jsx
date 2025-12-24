import { useState } from "react";
import "./Contact.css";

function Contact() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');false
  const handleSubmit = (e) => {
    e.preventDefault();e
    const formValue= {
      name: name,
      email: email,
      message: message,
    }
    console.log (formValue);
  };
  return (
    <>
      {/* CONTACT FORM */}
      <div className="container">
        <h1>Get in Touch</h1>
        <form>
           <div className="form-group">
         <label htmlFor="name">Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} name="name" className="form-control"/>
           </div>
              <div className="form-group">
              <label htmlFor="email">Email</label>
               <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control"/>
              </div>
              <div className="form-group">
                 <label htmlFor="message">Message</label>
                    <textarea onChange={(e)=>setMessage(e.target.value)} name="message" className="form-control"/>
                      </div>
                        <div className="form-group">
                     <button type="submit">Submit</button>
                  </div>
                 </form>

        {/* <form className="contact-form">
          <input type="text" placeholder="First Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </>
  );
}

export default Contact;
w