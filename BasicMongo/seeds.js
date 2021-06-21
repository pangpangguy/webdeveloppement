//Get sample data in database for development purposes

const Product = require("./models/product");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo connection successful");
  })
  .catch((err) => {
    console.log("Mongo connection failed! Something went wrong!");
    console.log(err);
  });

const data = [
  {
    name: "Golden Apple",
    price: 1.5,
    category: "fruit",
  },
  {
    name: "Palm Spring Oranges",
    price: 4.5,
    category: "fruit",
  },
  {
    name: "Sugary Watermelon",
    price: 5.5,
    category: "fruit",
  },
  {
    name: "Alaska Avocado",
    price: 11.5,
    category: "vegetable",
  },
  {
    name: "Thunder Brocoli",
    price: 3.0,
    category: "vegetable",
  },
  {
    name: "Brown Milk",
    price: 7.0,
    category: "dairy",
  },
];

Product.insertMany(data)
  .then(() => {
    console.log("Seeds data inserted successfully");
  })
  .catch((e) => {
    console.log("Seeds data insertion failed!");
    console.log(e);
  });
