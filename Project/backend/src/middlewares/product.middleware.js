import { productModel } from "../../db/models/product.model.js";

export const stopIfProductNameExist = async (req, res, next) => {
    const foundedProduct = await productModel.findOne({ name: req.body.name })
    if (foundedProduct) return res.status(409).json({ message: "Product Already exist" })
    next();
}