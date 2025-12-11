
import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true, 
         trim: true
         },
    email: { type: String, 
        trim: true,
         lowercase: true
         },
    contact: { 
        type: String,
         trim: true 
        },
    message: {
         type: String,
          trim: true
         },
    feedback: {
         type: String,
          trim: true
         },
})

let VisitorModel = new mongoose.model("visitors",VisitorSchema)

export {VisitorModel}