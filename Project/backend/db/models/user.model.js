import { model, Schema } from "mongoose"


const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    password: String,

},
{
    timestamps:true,
    versionKey:false
})

export const userModel = model("user", userSchema)