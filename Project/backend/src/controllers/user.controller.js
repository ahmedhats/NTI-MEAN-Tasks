import { userModel } from "../../db/models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json({ message: "Done", users })
}

const addUser = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const userToAdd = await userModel.insertMany(req.body)

    userToAdd[0].password = undefined;
    res.status(201).json({ message: "Added Successfully", userToAdd })

}

const login = async (req, res) => {
    const foundedUser = await userModel.findOne({ email: req.body.email })
    if (foundedUser) {
        const isMatchedPass  = bcrypt.compareSync(req.body.password,foundedUser.password);
        if(isMatchedPass) {
            const token= jwt.sign({_id:foundedUser._id,role:foundedUser.role},"superKey")
            return res.json({message:`welcome back ${foundedUser.name}`,token})
        }
            res.status(422).json({message:"Wrong Password"})
    }else{
        res.status(404).json({message:"user not found please signup"})
    }
}

const updateUser = async (req, res) => {
    const userToUpdate = await userModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    res.json({ message: "Updated", userToUpdate })
}

const deleteUser = async (req, res) => {
    const userToDelete = await userModel.findByIdAndDelete(req.params.id)
    res.json({ message: "deleted", userToDelete })
}

export {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    login,
}
//crud for products and cart and user
