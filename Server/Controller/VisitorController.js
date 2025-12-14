import express from "express"
import nodemailer from "nodemailer"
import { VisitorModel } from "../Models/VisitorModel.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,       // true for port 465
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSKEY,
  },
});


const StoreVisitor = async (req, res) => {
  try {
    const { name, email, contact, message, feedback } = req.body;

    if (!name || !email || !contact || (!message && !feedback)) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newVisitor = new VisitorModel({
      name,
      email,
      contact,
      message,
      feedback
    });

    await newVisitor.save();
     
    //sending an thank you email to visitor
    if (email) {
      await transporter.sendMail({
        from: `${process.env.USER_EMAIL}`,
        to: email,
        subject: "Thanks for contacting me!",
        html: `
          <p>Hi <b>${name}</b>,</p>
          <p>Thank you for reaching out! I received your message and I’ll get back to you soon.</p>
          <p><i>Your message:</i> ${message || feedback}</p>
          <br/>
          <p>Regards,<br/>Anushka</p>
        `
      })
    }

    res.status(201).json({
      message: "Visitor saved successfully",
      data: newVisitor
    })

    

  } catch (err) {
    //server error
    res.status(500).json({ message: "Server error" }, err);
  }
}

export { StoreVisitor }