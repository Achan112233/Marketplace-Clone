import express from 'express';
import dotenv from 'dotenv'; 

dotenv.config(); // Load environment variables from .env file
//importing express module  
const app = express();

//home route
app.get('/pr', (req, res) => {
    res.send('Hello World!');
});

//products route
app.get("/products", (req, res) => {
    res.send([
        {
            id: 1,
            name: "Product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        }
        {
            id: 3,
            name: "Product 2",
            price: 200
        }
        {
            id: 4,
            name: "Product 2",
            price: 200
        }
    ]);
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});

