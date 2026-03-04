const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const products = [
    { id: 1, name: 'Apple iPhone 15 Pro', price: 999.99, image: 'https://m.media-amazon.com/images/I/81Sig6biNGL._AC_SL1500_.jpg' },
    { id: 2, name: 'Sony WH-1000XM5 Headphones', price: 348.00, image: 'https://m.media-amazon.com/images/I/61+9m9RySML._AC_SL1500_.jpg' },
    { id: 3, name: 'Samsung Galaxy Watch 6', price: 299.00, image: 'https://m.media-amazon.com/images/I/61fSR6UfD1L._AC_SL1500_.jpg' },
    { id: 4, name: 'Apple MacBook Air M2', price: 1099.00, image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg' },
    { id: 5, name: 'PlayStation 5 Console', price: 499.99, image: 'https://m.media-amazon.com/images/I/51051HiS9OL._AC_SL1500_.jpg' },
    { id: 6, name: 'Nintendo Switch OLED', price: 349.00, image: 'https://m.media-amazon.com/images/I/61Xp6P-SclL._AC_SL1500_.jpg' }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => console.log('Backend running on port 3000'));