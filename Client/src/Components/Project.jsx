import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Project() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            const { data } = await axios.get("http://localhost:5029/api/getprojects");
            setProjects(data.projects)
        };

        fetchProjects();
    }, []);
    
    return (
        <>
            <section id='projects'>
                <div className='center-content'>
                    <p className="text-lg text-white/70 ">
                        ● Projects
                    </p>
                    <h1 className="text-5xl  leading-tight font-medium my-10">
                        Crafting practical MERN stack projects focused on performance, scalability, and clean code.
                    </h1>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* mob col-1 tablet-col-2 laptop col-3 */}
                        {projects.map(project => (
                            <div key={project._id} className="bg-primary rounded-3xl shadow-md project-card">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover rounded-tl-3xl rounded-tr-3xl"
                                />

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="text-xl text-white/80 mt-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="text-base px-3 py-1 rounded-full bg-white/15 text-white">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-6 project-links">
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank">Live</a>
                                            //target="_blank" link ko new tab me open karta hai taaki user tumhari website chhod ke na jaye.
                                        )}
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank">GitHub</a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project