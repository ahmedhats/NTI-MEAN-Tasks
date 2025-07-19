import express from 'express'
export const cartRoutes = express.Router();


cartRoutes.get('/cart',getUsers)

cartRoutes.post('/cart',checkEmail,addUser)

cartRoutes.put('/cart/:id',updateUser)

cartRoutes.delete('/cart/:id',deleteUser)