import express from 'express';
import dotenv from dotenv;
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js'; //importing the product routes


// Load environment variables from secret file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000
//allows us to accept JSON data in the request body
app.use(express.json()); //middleware to parse JSON data from request body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    //connecting to database
    // Callback function to run after the server starts
    console.log('Server started at http://localhost:' + PORT);
});
