
import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    
    email: { type: String, 
        trim: true,
         lowercase: true,
         required :true
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