import { useState } from "react";
import "./Contact.css";
import CustomButton from "../components/CustomButton";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formvalue = {
      name: name,
      email: email,
      message: message
    };
    console.log(formvalue);
    alert(`Thank you ${formvalue.name}! \nMessage sent successfully.`);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      
      <div className="contact-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              className="form-input" 
              placeholder="Your Name"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-input" 
              placeholder="Your Email"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              onChange={(e) => setMessage(e.target.value)} 
              className="form-input" 
              placeholder="Enter your message..."
              rows="5"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <CustomButton type="PRIMARY" />
            <CustomButton type="OUTLINE" />
          </div>
          {/* <button type="submit" className="submit-btn">Send Message</button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;

