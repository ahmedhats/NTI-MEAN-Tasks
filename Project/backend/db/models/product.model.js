import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
    name:String,
    description:String,
    price:Number,
    stock:Number,
    image:String,   
},
{
    versionKey:false
})

export const productModel = mongoose.model("product",productsSchema)