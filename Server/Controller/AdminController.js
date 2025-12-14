import express from "express"
import jwt from "jsonwebtoken"
import { UserModel } from "../Models/UserModel.js"
import bcrypt from "bcrypt";
import dotenv from "dotenv"


dotenv.config({ path: "./config.env" })

// const createAdmin = async (req, res) => {
        
//      await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
//         const adminexist = await UserModel.findOne({ role: "admin" })

//         if (adminexist)  return console.log("admin exist!")

//         const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12)

//         await UserModel.create({
//             email: process.env.ADMIN_EMAIL,
//             password: hashedPassword,
//             role: "admin"
//         })

//         res.status(201).json({message:"Amin created successfully!"})

   
// }
// createAdmin()

const loginAdmin=async(req,res)=>{
    try{
      const {email,password}=req.body

      const exist=await UserModel.findOne({email})

      if(!exist) throw("Admin do not exist!")

     //compare password
     const matchpassword=bcrypt.compare(password,exist.password)
     if(!matchpassword)throw("Incorrect password!")
     
        //create token
    let payload={
        id:exist._id,
        role:exist.role
    }
    let token=jwt.sign(
      payload, process.env.JWT_SECRET_TOKEN,{expiresIn:"12hr"}
    )
    //send response
    res.status(200).json({
        message:"Admin login successfully",token
    })
    }catch(err){
         res.status(500).json({ msg: "Server error" })
    }
}

export{loginAdmin}
