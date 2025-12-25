import { Code2 } from "lucide-react";

const Skillspage = () => {
    return (
        <>
            <section id="skills">
                <div className="center-content">
                    <div className="mern-card" >
                        <p className="text-lg text-white/70">• My Skills</p>

                        <div className="mern-card-header">
                            <div className="mern-icon">
                                <Code2 size={22} className="text-white" />
                            </div>
                            <h2 className="mern-title">
                                MERN Development <span className='text-white/60 text-base'>(01)</span>
                            </h2>
                        </div>

                        <ul className="skill-list text-2xl flex flex-col gap-4">
                            <li> React.js & Component-Based UI</li>
                            <li> REST APIs with Node.js & Express</li>
                            <li> MongoDB Database Design</li>
                            <li> JWT Authentication & Authorization</li>
                            <li> JavaScript (ES6+)</li>
                        </ul>

                        <h3 className="text-white/60 text-5xl ">Backend & APIs <span>(02)</span></h3>
                        <h3 className="text-white/60 text-5xl pt-4">Frontend Systems <span>(03)</span></h3>
                        <h3 className="text-white/60 text-5xl pt-4">Scalable Data Systems <span>(04)</span></h3>
                    </div>
                </div>
                <section className="tech-section">
                 <div className="center-content">
                            <h2 className=" mb-8 mern-title">Tech Stack</h2>

                    {/* Carousel */}
                    <div className="tech-carousel">
                        <div className="tech-card">
                            <h3>React</h3>
                            <div className="tech-icon">
                                <img
                                    src="/Techstack/react.png"
                                    className=" w-full object-cover rounded-xl"
                                />
                            </div>
                            <p>Frontend library for building UI</p>
                        </div>

                        <div className="tech-card">
                            <h3>Node.js</h3>
                            <div className="tech-icon">🟢</div>
                            <p>Backend runtime for scalable apps</p>
                        </div>

                        <div className="tech-card">
                            <h3>Express</h3>
                            <div className="tech-icon">🚀</div>
                            <p>REST API & server-side logic</p>
                        </div>

                        <div className="tech-card">
                            <h3>MongoDB</h3>
                            <div className="tech-icon">
                                  <img
                                    src="/Techstack/image.png"
                                    className=" w-full object-cover rounded-xl"
                                />
                            </div>
                            <p>NoSQL database for data storage</p>
                        </div>

                        <div className="tech-card">
                            <h3>JWT</h3>
                            <div className="tech-icon">
                                 <img
                                    src="/Techstack/jwt.png"
                                    className=" w-full object-cover rounded-xl"
                                />
                            </div>
                            <p>Authentication & authorization</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="tech-progress">
                        <span />
                    </div>
                 </div>
                </section>
            </section>


        </>
    )
}

export { Skillspage }