import { userModel } from "../../db/models/user.model.js"

export const stopIfEmailExist = async (req,res,next)=>{
   const foundedUser = await userModel.findOne({ email: req.body.email })
   if (foundedUser) return res.status(409).json({ message: "User Already exist, please login" })
   next();
}