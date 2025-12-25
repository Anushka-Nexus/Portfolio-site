import React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQs() {

    const [open, setOpen] = useState(1);

    const togglebtn =(index)=>{
       setOpen(open === index ? 0 : index)
    }

    return (
        <section id="Faqs">
            <div className="center-content">
                <div className="w-full max-w-5xl mx-auto px-4 py-20 text-white">

                    {/* TITLE */}
                    <h2 className="text-3xl mb-12 mern-title">
                        FAQs
                    </h2>

                    {/* FAQ 1 */}
                    <div className="border-b border-white/20 pb-6 mb-6">
                        <button
                            onClick={()=>togglebtn(1)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-lg md:text-3xl font-medium">
                                What’s the project progress like?
                            </span>
                            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30">
                                {open === 1 ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                        </button>

                        {open === 1 && (
                            <p className="mt-4 max-w-3xl text-white/70 text-base md:text-xl leading-relaxed">
                                Projects are developed in clear stages with regular updates,
                                transparent communication, and structured milestones.
                            </p>
                        )}
                    </div>

                    {/* FAQ 2 */}
                    <div className="border-b border-white/20 pb-6 mb-6">
                        <button
                            onClick={()=>togglebtn(2)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-lg md:text-3xl font-medium">
                                Estimated delivery timeline?
                            </span>
                            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30">
                                {open === 2 ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                        </button>

                        {open === 2 && (
                            <p className="mt-4 max-w-3xl text-white/70 text-base md:text-xl leading-relaxed">
                                Delivery time depends on scope, but most MERN stack projects
                                are completed within 2–4 weeks.
                            </p>
                        )}
                    </div>

                    {/* FAQ 3 */}
                    <div className="border-b border-white/20 pb-6 mb-6">
                        <button
                            onClick={()=>togglebtn(3)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-lg md:text-3xl font-medium">
                                What services do you offer?
                            </span>
                            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30">
                                {open === 3 ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                        </button>

                        {open === 3 && (
                            <p className="mt-4 max-w-3xl text-white/70 text-base md:text-xl leading-relaxed">
                                Full-stack MERN development, REST APIs, authentication,
                                admin dashboards, and deployment support.
                            </p>
                        )}
                    </div>

                    {/* FAQ 4 */}
                    <div className="border-b border-white/20 pb-6">
                        <button
                            onClick={()=>togglebtn(4)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-lg md:text-3xl font-medium">
                                What if I need changes later?
                            </span>
                            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30">
                                {open === 4 ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                        </button>

                        {open === 4 && (
                            <p className="mt-4 max-w-3xl text-white/70 text-base md:text-xl leading-relaxed">
                                Future updates and refinements are always supported to
                                keep the product aligned with evolving requirements.
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </section>

    )
}

export {FAQs}