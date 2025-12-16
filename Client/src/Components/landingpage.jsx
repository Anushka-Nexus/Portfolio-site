import React from 'react'

function Homepage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Videos/bg.mp4" type="video/mp4" />
        </video>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Layout */}
        <div className="relative z-10 min-h-screen text-white">
          {/* left layout */}
          <div className='profile-card rounded-xl'>
            <p className="text-lg text-light mt-4 px-3 py-3 mx-6  rounded-xl border border-light">
              ● Available for <b>projects</b>
            </p>
            <div className="h-60 bg-white rounded-2xl my-4 mx-6 ">img daalni h yha pr baki h</div>

            <div className='flex flex-col gap-5'>
              <h2 className="text-4xl text-center font-semibold great-vibes-regular text-white">Anushka Shende</h2>
              <p className="text-xl text-white/60 text-center">
                shendeanushka1@gmail.com
              </p>

              <div className='mx-4'>
                <button className=" w-full bg-white/25 text-white py-4 rounded-full text-lg">
                  Get Started →
                </button>
              </div>
            </div>

          </div>
          <div className='center-content min-h-screen mx-4 my-4'>
            <div className='flex gap-10 flex-col'>
              <div>
                <p className="text-lg text-white/50 ">
                  ● Nagpur,Maharashtra
                </p>
              </div>
              <div>
                <h1 className="text-5xl  leading-tight font-medium my-12">
                  A MERN stack developer focused on building secure, maintainable, and production-ready applications.
                </h1>
                <p className="mt-4 text-white/60 max-w-xl">
                  From React interfaces to Node & MongoDB backends, I build complete solutions.
                </p>
              </div>

              <div className='flex gap-3 '>
                <span className=" rounded-full  py-1 px-4  bg-white/15">MERN Stack</span>
                <span className=" rounded-full  py-1 px-4  bg-white/15">REST APIs</span>
                <span className=" rounded-full  py-1 px-4  bg-white/15">JWT Authentication</span>
                <span className=" rounded-full  py-1 px-4  bg-white/15">Admin Dashboard </span>
              </div>

            </div>
            <div className="fixed right-6 top-1/2 -translate-y-1/2 bg-primary/25 backdrop-blur-xl rounded-xl py-4 px-2 flex flex-col gap-5">
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/home.png"
                    class="social-media-icons rounded-circle position-relative "></img>
                </a>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/work.png"
                    class="social-media-icons rounded-circle position-relative "></img>
                </a></div>
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/skills.png"
                    class="social-media-icons rounded-circle position-relative "></img>
                </a></div>
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/testimonial.png"
                    class="social-media-icons rounded-circle position-relative "></img>
                </a></div>
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/chat.png"
                    class="social-media-icons rounded-circle position-relative "></img>
                </a></div>
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/contact.png"
                    class="social-media-icons rounded-full"></img>
                </a></div>
              <div className="w-10 h-10 bg-white/20 rounded-full">
                <a
                  href=""><img
                    src="./Icons/blog.png"
                    class="social-media-icons rounded-circle position-relative "></img>
                </a></div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Homepage