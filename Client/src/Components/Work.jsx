import React from 'react'

function Workpage() {
  return (
    <>

      <div className='center-content'>
        <p className="text-lg text-white/70 ">
          ● Experience
        </p>
        <h1 className="text-5xl  leading-tight font-medium my-10">

          Experienced in creating responsive React interfaces and reliable backend systems using Node.js, Express, and MongoDB.
          Committed to writing maintainable code and developing solutions that work smoothly in real-world environments.
        </h1>
        <div className='flex flex-col gap-5'>
          <div className="exp-item">
            <p className="company">Tracker App</p>
            <h3 className="role">MERN Stack Developer</h3>
          </div>

          <div className="exp-item">
            <p className="company">Personal Projects</p>
            <h3 className="role">MERN Stack Developer</h3>
          </div>

        </div>
        

      </div>
    </>
  )
}

export default Workpage