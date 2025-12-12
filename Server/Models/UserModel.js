import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true

    },
    role: {
        type: String,
        default: "admin"
    }
})

//projectschema model
let UserModel = new mongoose.model("users", UserSchema)

export {UserModel }
