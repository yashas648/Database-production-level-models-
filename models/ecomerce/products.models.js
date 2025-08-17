import mongoose from "mongoose"
import { category } from "./category.models"

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    quantity:{
        type: Number,
       default: 0
        
    },
    category :{
        type: mongoose.Types.ObjectId,
        ref :"category"
    }


}, { timestamps: true })



export const Product = mongoose.model("Product", productSchema)