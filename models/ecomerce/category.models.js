import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    sports:{
        type: String,
        required : true,
        
    },
    mobile: String,
    headphone: String

    
},{timestamps : true})


export const category = categorySchema.model("category", categorySchema)