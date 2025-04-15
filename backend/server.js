import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'; // Load environment variables from .env file
import productRoutes from './routes/product.route.js'; //importing the product routes


// Load environment variables from secret file
dotenv.config(); // Load environment variables from .env file

if (!process.env.MONGO_URI || !process.env.PORT) {
    console.error("Error: Missing required environment variables in .env file");
    process.exit(1); // Exit with failure
}

const app = express();
const PORT = process.env.PORT || 5001; // Change the fallback port
//allows us to accept JSON data in the request body
app.use(express.json()); //middleware to parse JSON data from request body

app.use("/api/products", productRoutes);

console.log('PORT:', process.env.PORT);
app.listen(PORT, () => {
    connectDB();
    //connecting to database
    // Callback function to run after the server starts
    console.log('Server started at http://localhost:' + PORT);
});
