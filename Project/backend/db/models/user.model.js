import { model, Schema } from "mongoose"


const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }

},
{
    timestamps:true,
    versionKey:false
})

export const userModel = model("user", userSchema)