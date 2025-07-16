const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
category: { type: String, required: true },
price: { type: Number, required: true },
description: { type: String, required: true },

    // image: String,
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
