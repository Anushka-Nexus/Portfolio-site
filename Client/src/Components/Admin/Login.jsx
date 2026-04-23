
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function AdminLogin() {
    const [form, setForm] = useState({

        email: '',
        password: ""
    })
    const navigate = useNavigate();
    const Handlechange = (e) => {
        let { name, value } = e.target
        setForm({ ...form, [name]: value });
    }
    const HandleSubmit = async (event) => {
        e.preventDefault();
         try {
      const sendresult = await axios(
        {
          method: "POST",
          url: "http://localhost:5029/api/adminLogin",
          data: form
        }     
      )
      console.log("LOGIN SUCCESS:", res.data)

    // token store
    localStorage.setItem("adminToken", res.data.token);
    //redirect to dashboard
    navigate("/admin")
    }catch(err){
        
        alert("Invalid credentials or server error")
      }

    }
    
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/Videos/bg1.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md bg-[rgba(var(--primary-rgb-clr),0.75)] backdrop-blur-xl p-8 rounded-2xl">
                <h2 className="text-3xl mb-6 font-medium text-center">
                    Admin Login
                </h2>

                <form action="" onSubmit={HandleSubmit}>
                    <input
                        type="email"
                        placeholder="Admin Email"
                        className="w-full mb-4 px-4 py-3 bg-[rgba(var(--primary-rgb-clr),0.80)] border border-white/20 rounded-lg"
                        value={form.email}
                        name="email"
                        onChange={Handlechange}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-6 px-4 py-3 bg-[rgba(var(--primary-rgb-clr),0.80)] border border-white/20 rounded-lg"
                        value={form.password}
                        name="password"
                        onChange={Handlechange}
                    />

                    <Link to="/admin">
                        <button type="submit" className="w-full py-3 rounded-lg bg-white/70 text-black font-medium hover:bg-primary">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
