import { productModel } from "../../db/models/product.model.js";
import jwt from 'jsonwebtoken'

export const stopIfProductNameExist = async (req, res, next) => {
    const foundedProduct = await productModel.findOne({ name: req.body.name })
    if (foundedProduct) return res.status(409).json({ message: "Product Already exist" })
    next();
}

export const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, "superKey", (error, decoded) => {
        if (error) return res.status(400).json({ error })
        req.user = decoded;
        next()
    })
}

export const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") return next()
    res.status(401).json({ message: "only admins can do this action" })
}