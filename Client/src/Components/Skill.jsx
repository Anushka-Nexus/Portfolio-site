import { Code2 } from "lucide-react";

const Skillspage = () => {
    return (
        <>
            <div className="center-content">
                <div className="mern-card">
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
                    <h3 className="text-white/60 text-5xl pt-3">Frontend Systems <span>(03)</span></h3>
                    <h3 className="text-white/60 text-5xl pt-3">Scalable Data Systems <span>(04)</span></h3>
                </div>
            </div>

        </>
    )
}

export { Skillspage }