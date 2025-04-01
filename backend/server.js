import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'; //importing the product routes

// Load environment variables from secret file
dotenv.config();

const app = express();

//allows us ti accept JSON data in the request body
app.use(express.json()); //middleware to parse JSON data from request body

app.use("/api/products", productRoutes] => {
    res.status(200).json({ message: "This is the products API endpoint" });
});

app.listen(5000, () => {
    connectDB();
    //connecting to database
    console.log('Server started at http://localhost:5000');
});
