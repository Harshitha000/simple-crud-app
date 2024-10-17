const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

// Middleware to read json input
app.use(express.json());
// Middleware to read form-data
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Node API Updated");
});

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://harshithagundarapu:Ct6JLDnoHqYolNZ7@backenddb.shbie.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the Database");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
