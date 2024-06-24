const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const products = require('./src/products/products.json');

app.get("/products", (_, res) => {
  return res.json(products);
});


app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id, 10));

  if (product) {
    return res.json(product);
  } else {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
