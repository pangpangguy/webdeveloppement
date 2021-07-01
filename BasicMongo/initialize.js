const Product = require("./models/product");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmStand2", {
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

const initialize = async () => {
  await Product.deleteMany({});
  console.log("Deletion successful");
};

initialize();
