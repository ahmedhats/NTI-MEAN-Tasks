import express from 'express'
import { getProducts, addProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';
import { stopIfProductNameExist } from '../middlewares/product.middleware.js';
export const productRoutes = express.Router();


productRoutes.get('/products', getProducts)

productRoutes.post('/products', stopIfProductNameExist, addProduct)

productRoutes.put('/products/:id', updateProduct)

productRoutes.delete('/products/:id', deleteProduct)