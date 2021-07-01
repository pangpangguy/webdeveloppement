const mongoose = require("mongoose");
const Product = require("./product");
const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Farm must have a name!"],
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

//Deletes all products associated to a farm when a farm is deleted
//findOneAndDelete is called by findByIdAndDelete
farmSchema.post("findOneAndDelete", async function (farm) {
  if (farm.products.length) {
    await Product.deleteMany({ _id: { $in: farm.products } });
  }
});
const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
