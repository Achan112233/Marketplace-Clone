import Product from '../models/products.model.js'; //importing the Product model to interact with the database
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); //finding all products in the database
        res.status(200).json({
            success: true,
            data: products //sending the products as a response
        });
    } catch (error) {
        console.log("Error in Get Products: ", error.message); //logging the error message to the console for debugging purposes
        res.status(500).json({
            success: false,
            message: 'Server Error', //sending a generic server error message
            error: error.message //sending the actual error message for debugging purposes
        });
    }
}

export const postProduct = async (req, res) => {
    const product = req.body; //user will send this data in the request body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields: name, price, image' });
    }

    const newProduct = new Product(product)
    //creating a new product instance with the data provided by the user
    // Product is a mongoose model that we will define later in the code
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create Product: ", error.message);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}

export const putProduct = async (req, res) => {
    const { id } = req.params; //extracting the id from the request parameters
    const product = req.body; //user will send this data in the request body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ //checking if the id is valid or not
            success: false,
            message: 'Invalid Product ID'
        });
    }
    try {
        const updatedProduct = await Product.findByIdAndDelete(id, product, {new: true}); //finding the product by id and deleting it from the database to update it
        res.status(200).json({
            success: true,
            data: updatedProduct //sending the updated product as a response
        });
    } catch (error) {
        console.error("Error in Update Product: ", error.message); //logging the error message to the console for debugging purposes
        return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params; //extracting the id from the request parameters
    console.log("id:", id); //logging the id to the console for debugging purposes

    //checking if the id is valid or not
    try {
        await Product.findByIdAndDelete(id); //finding the product by id and deleting it from the database
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.log("Error in Delete Product: ", error.message); //logging the error message to the console for debugging purposes
        //logging the error message to the console for debugging purposes
        res.status(404).json({ success: false, message: "Product not found" });
    }
}