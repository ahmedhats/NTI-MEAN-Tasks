import express from 'express'
import { addUser, deleteUser, getUsers, login, updateUser } from '../controllers/user.controller.js';
import { stopIfEmailExist } from '../middlewares/user.middleware.js';
 
 export const userRoutes = express.Router();


 userRoutes.get('/users',getUsers)

 userRoutes.post('/users/signup',stopIfEmailExist,addUser)

 userRoutes.post('/users/login',login)

 userRoutes.put('/users/:id',updateUser)

 userRoutes.delete('/users/:id',deleteUser)