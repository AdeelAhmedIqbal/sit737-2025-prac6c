const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const quotes = [
  "Success is not in what you have, but who you are.",
  "Opportunities don't happen, you create them.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
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