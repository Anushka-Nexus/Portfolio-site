
import AdminLogin from './Components/Admin/Login.jsx'
import ContactPage from './Components/Contact.jsx'
import Homepage from './Components/landingpage.jsx'
import { Skillspage } from './Components/Skill.jsx'
import Workpage from './Components/Work.jsx'
import './Stylesheets/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {MainDashboard} from './Components/Admin/Main-Dashboard.jsx'




function App() {
 

  return (
    <>
     
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Homepage/>} />
              <Route path='/adminlogin' element={<AdminLogin/>} />
               <Route path='/admin' element={<MainDashboard/>} />
          </Routes>
           
        </BrowserRouter>
     
    </>
  )
}


export default App
