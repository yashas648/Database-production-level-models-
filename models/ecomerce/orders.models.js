import mongoose from "mongoose"


const ordersSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Types.ObjectId,
        ref:"user"
    },
    typeofcatergory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
}, {timestamps:true})