import express from 'express'
import { addUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller.js';
import { stopIfEmailExist } from '../middlewares/user.middleware.js';
 
 export const userRoutes = express.Router();


 userRoutes.get('/users',getUsers)

 userRoutes.post('/users',stopIfEmailExist,addUser)

 userRoutes.put('/users/:id',updateUser)

 userRoutes.delete('/users/:id',deleteUser)