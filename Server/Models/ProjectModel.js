import mongoose from "mongoose";

//include titile slug description live link github link images tech used 

const ProjectSchema = new mongoose.Schema({
    // Project ka naam
    title: {
        type: String,
        required: true
    },
    // URL-friendly ID (important) 
    slug: {
        type: String,
        required: true,
        unique: true
    },
    // Project details
    description: {
        type: String,
        required: true
    },
    // Tech stack (React, Node, etc.)
    stack: [String],

    // Project image    
    imageUrl: String,

    // Live demo link  
    liveUrl: {
        type: String,
        validate: {
            validator: function () {
                // liveUrl ya repoUrl me se ek filled hona chahiye
                return this.liveUrl || this.repoUrl;
            },
            message: "Either liveUrl or repoUrl is required."
        }
    },

    // GitHub repo link     
    repoUrl: String,

    PostedAt: {
        type: Date,
        default: Date.now
    }
})

//projectschema model
let ProjectModel = new mongoose.model("projects", ProjectSchema)

export { ProjectModel }


