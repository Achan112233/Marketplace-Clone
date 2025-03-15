import express from 'express';
//importing express module  
import dotenv from 'dotenv'; 
import { connectDB } from './config/db.js';

// Load environment variables from secret file
dotenv.config(); 
const app = express();


//products route
app.get("/products", (req, res) => {
    if 
});

//importing mongoose module
console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    //connecting to database
    console.log('Server started at http://localhost:5000');
});
