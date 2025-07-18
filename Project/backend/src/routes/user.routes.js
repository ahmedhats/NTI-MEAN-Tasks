 import express from 'express'
import { addUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller.js';
 
 export const userRoutes = express.Router();


 userRoutes.get('/users',getUsers)

 userRoutes.post('/users',addUser)

 userRoutes.put('/users/:id',updateUser)

 userRoutes.delete('/users/:id',deleteUser)