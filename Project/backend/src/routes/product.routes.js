import express from 'express'
import { getProducts, addProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';
import { verifyToken, isAdmin, stopIfProductNameExist } from '../middlewares/product.middleware.js';
export const productRoutes = express.Router();

productRoutes.use(verifyToken)

productRoutes.get('/products', getProducts)

productRoutes.post('/products', isAdmin, stopIfProductNameExist, addProduct)

productRoutes.put('/products/:id', isAdmin, updateProduct)

productRoutes.delete('/products/:id', isAdmin, deleteProduct)