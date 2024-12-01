const express = require('express');
const { resolve } = require('path');
var cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = req.query.quantity;
  const result = (marketPrice - boughtAt) * quantity;

  res.json(result);
});

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const result = stock1 + stock2 + stock3 + stock4;

  res.json(result);
});
app.get('/calculate-return-percentage', (req, res) => {
  const stocboughtAtk1 = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  const result = (returns / stocboughtAtk1) * 100;

  res.json(result);
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const result = stock1 + stock2 + stock3 + stock4;
  const percentage = (result / 100) * 100;

  res.json(percentage);
});
app.get('/status', (req, res) => {
  const returnPercentage = parseInt(req.query.returnPercentage);

  if (returnPercentage >= 90) {
    res.json('profit');
  } else {
    res.json('loss');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
