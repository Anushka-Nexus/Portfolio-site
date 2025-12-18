// import { useState } from 'react'
// import Sample from './Components/Sample.jsx'
// import ContactForm from './Components/Contact.jsx'
import ContactPage from './Components/Contact.jsx'
import Homepage from './Components/landingpage.jsx'
import { Skillspage } from './Components/Skill.jsx'
import Workpage from './Components/Work.jsx'
import './Stylesheets/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
 

  return (
    <>
      {/* <Sample/>
      <ContactForm/> */}
      <Homepage/>
      {/* <BrowserRouter>
          <Routes>
             <Route path='/' element={<Homepage/>} />
             <Route path='/work' element={<Workpage/>} />
             <Route path='/work' element={<Skillspage/>} />
             <Route path='/contact' element={<ContactPage/>} />

          </Routes>
        </BrowserRouter> */}
     
    </>
  )
}


export default App
