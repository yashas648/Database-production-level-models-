import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique : true,
        lowercase : true
    },
    email:{
        type: String,
        required : true,
        unique : true,
        lowercase : true
    },
    pass:{
        type: String,
        required : true,
        lowercase : true
    }

},{timestamps : true})


export const user = userSchema.model("user", userSchema)