const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/category/:category", (req, res) => {
  const category = req.params.category;

  const filteredProducts = products.filter(
    product => product.category === category
  );

  res.json(filteredProducts);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

app.use(express.json());

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created",
    product: newProduct
  });
});

app.put("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(u => u.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  res.status(200).json({
    message: "Product replaced",
    product: products[index]
  });
});

app.put("/products/:id/stock", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(u => u.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };
  res.status(200).json({
    "stock" : req.body.stock
  });
});

app.put("/products/:id/price", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(u => u.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };
  res.status(200).json({
    "price" : req.body.price
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});