import express from 'express';
//importing express module  
import dotenv from 'dotenv'; 
//importing dotenv module
import colors from 'colors';
import { connectDB } from './config/db.js';

// Load environment variables from secret file
dotenv.config(); 

const app = express();

//allows us ti accept JSON data in the request body
app.use(express.json()); //middleware to parse JSON data from request body

app.post("/api/products", async (req, res) => {
    const product = req.body; //user will send this data in the request body
    
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields: name, price, image' });
    }

    const newProduct = new Product(product)
    //creating a new product instance with the data provided by the user
    // Product is a mongoose model that we will define later in the code
    try{
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create Product: ", error.message);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}); 

app.delete("/api/products/:id", async (req, res) => {
    const{ id } = req.params; //extracting the id from the request parameters
    console.log("id:", id); //logging the id to the console for debugging purposes

    //checking if the id is valid or not
    try{
        await Product.findByIdAndDelete(id); //finding the product by id and deleting it from the database
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    }catch (error) {
        console.error("Error in Delete Product: ", error.message);
        //logging the error message to the console for debugging purposes
        res.status(404).json({ success: false, message: "Product not found" });
    }
})

app.listen(5000, () => {
    connectDB();
    //connecting to database
    console.log('Server started at http://localhost:5000');
});
