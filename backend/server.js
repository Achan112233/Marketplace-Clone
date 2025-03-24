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


//products route
app.get("/products", (req, res) => {
    res.send("Products route");
});

//orders route
app.get("/orders", (req, res) => {
    res.send("Orders route");
});
app.get("/home", (req, res) => {
    res.send("API is running.. welcome to the home page");
});
//importing mongoose module
console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    //connecting to database
    console.log('Server started at http://localhost:5000');
});
