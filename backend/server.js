const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const products = [
    { id: 1, name: "Echo Dot (5th Gen)", price: 49.99, image: "https://m.media-amazon.com/images/I/71YID7jSkwL.jpg" },
    { id: 2, name: "Kindle Paperwhite", price: 139.99, image: "https://m.media-amazon.com/images/I/71X86VfS6OL.jpg" },
    { id: 3, name: "Fire TV Stick 4K", price: 49.99, image: "https://m.media-amazon.com/images/I/51v8uxZ92vL.jpg" }
];

app.get('/api/products', (req, res) => res.json(products));

app.listen(3000, () => console.log('Amazon Backend running on port 3000'));