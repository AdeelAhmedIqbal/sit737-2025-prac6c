const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated."
];

// Set engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.render('index', { quote });
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});