import express from 'express';
//importing express module  
import dotenv from 'dotenv'; 
//importing dotenv module
import colors from 'colors';
//importing colors module
import { connectDB } from './config/db.js';

// Load environment variables from secret file
dotenv.config(); 
const app = express();

app.post("/products", async (req, res) => {
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

//importing mongoose module
console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    //connecting to database
    console.log('Server started at http://localhost:5000');
});
