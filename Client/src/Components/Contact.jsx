import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ContactPage = () => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const [form, setForm] = useState({

    email: '',
    contact: '',
    message: '',
    feedback: ''
  })
  const handleChange = (e) => {
    let { name, value } = e.target
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = async (event) => {
    if (!emailRegex.test(form.email)) {
      throw ("Invalid email format")

    }
    try {
      const sendresult = await axios(
        {
          method: "POST",
          url: "http://localhost:5029/api/contact",
          data: form
        }
      )

      if (sendresult.status === 201) {
        alert("Message sent successfully!");
        setForm({ email: "", contact: "", message: "", feedback: "" })
      } else {
        throw ("Something went wrong")
      }
    } catch (error) {
      throw ("Server error. Try again.")
    }
  }
  return (
    <>
      <div className='center-content'>
        <div className='mern-card'>
          <h2 className="mern-title  mb-8" style={{ lineHeight: "3.5rem" }}>
            Contact For <br /> Work
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="text-sm text-gray-300">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/20 py-2 mt-2 outline-none input-focus"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="text-sm text-gray-300">Your Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-transparent border-b border-white/20 py-2 mt-2 outline-none input-focus"
                value={form.contact}
                 onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="text-sm text-gray-300">Messenger</label>
              <textarea
                rows="3"
                className="w-full bg-transparent border-b border-white/20 py-2 mt-2 resize-none outline-none input-focus"
                value={form.message}
                 onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-8">
              <label className="text-sm text-gray-300">Feedback</label>
              <textarea
                rows="1"
                className="w-full bg-transparent border-b border-white/20 py-2 mt-2 resize-none outline-none input-focus"
                value={form.feedback}
                 onChange={handleChange}
              ></textarea>
            </div>
            <button className="flex items-center justify-between gap-3 bg-white/70 text-black px-4 py-3 rounded-full font-medium hover:scale-105 transition">
              Get Started
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
                →
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default ContactPage