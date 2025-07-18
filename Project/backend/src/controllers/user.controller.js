import { userModel } from "../../db/models/user.model.js";


const getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json({ message: "Done", users })
}

const addUser = async (req, res) => {
    console.log(req.body)
    const userToAdd = await userModel.insertMany(req.body)
    res.status(201).json({ message: "Added Successfully", userToAdd })
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
}