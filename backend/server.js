import express from 'express';

const app = express();

app.get('/pr', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});

app.get('/pr', (req, res) => {
    res.send('Hello World!');
}   );
app.get('/pr', (req, res) => {
    res.send('Hello World!');
});