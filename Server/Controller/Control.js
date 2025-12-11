import express from "express"
import nodemailer from "nodemailer"

import jwt from "jsonwebtoken"

const home=async(req,res)=>{
    let data1=300
    
     res.status(200).json({ message: "Hi! This is our test route." ,data1 :data1})
}



export {home}