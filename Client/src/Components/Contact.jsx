import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ContactForm=()=>{
     const emailRegex = /^\S+@\S+\.\S+$/;
     const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    feedback: ''
  })
  const handleChange = (e) => {
    let {name,value}=e.target
    setForm({ ...form, [name]:value });
  }
  const handleSubmit=async(event)=>{
   if(!emailRegex.test(form.email)) {
      throw("Invalid email format")
      
    }
    try {
      const sendresult = await axios.post(
        "http://localhost:5029/api/contact",
        form,
        
      )

      if (sendresult.status === 201) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", contact: "", message: "", feedback: "" })
      } else {
        throw("Something went wrong")
      }
    } catch (error) {
      throw("Server error. Try again.")
    }
  }
    return(
      <>
       <form action=""onSubmit={handleSubmit}>
      
       <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-clr)" }} > Let’s Connect </h2>

    {/* Name */}
    <input name="name" type='text' placeholder="Enter your Name"value={form.name} onChange={handleChange}
    className="w-full border border-gray-300 p-3 mb-4 rounded-sm  placeholder-gray-500 bg-white focus:outline-none focus:border-[var(--secondary-clr)]"  />

    {/* Email */}
    <input type="email" name="email" placeholder="Enter a valid email address" value={form.email} onChange={handleChange}
     className="w-full border border-gray-300 p-3 mb-4 rounded-sm  placeholder-gray-500 bg-white focus:outline-none focus:border-[var(--secondary-clr)]" />

    {/* Message */}
    <textarea name="message" placeholder="Enter your message" rows="4"value={form.message}onChange={handleChange}
      className="w-full border border-gray-300 p-3 mb-4 rounded-sm placeholder-gray-500 bg-white focus:outline-none focus:border-[var(--accent-clr)]"/>

    {/* Feedback */}
    <textarea name="feedback" placeholder="Enter your feedback" rows="3" value={form.feedback} onChange={handleChange}
      className="w-full border border-gray-300 p-3 mb-4 rounded-sm  placeholder-gray-500 bg-white focus:outline-none   focus:border-[var(--accent-light-clr)]"
    />

    {/* Submit Button */}
    <button
      type="submit" className="px-6 py-2 border rounded-sm transition  hover:bg-gray-100"
      style={{
        borderColor: "var(--secondary-clr)",
        color: "var(--secondary-clr)"
      }}
    >
      Submit
    </button>
       </form>
      </>
    )
}
export default ContactForm