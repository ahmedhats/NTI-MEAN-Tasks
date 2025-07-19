import { productModel } from "../../db/models/product.model.js";

const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.json({ message: "Done", products })
}

const addProduct = async (req, res) => {
    const productToAdd = await productModel.insertMany(req.body)
    res.status(201).json({ message: "Added Successfully",productToAdd })

}

const updateProduct = async (req, res) => {
    const productToUpdate = await productModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    res.json({ message: "Updated",productToUpdate })
}

const deleteProduct = async (req, res) => {
    const productToDelete = await productModel.findByIdAndDelete(req.params.id)
    res.json({ message: "deleted",productToDelete })
}

export {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
}