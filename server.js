const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const methodOverride = require("method-override");

//CONTROLLERS
const foodController = require("./controller/foodController");
const morgan = require("morgan");

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Conected to MongoDB ${mongoose.connection.name}`);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//ROUTE
app.use("/food", foodController);

app.listen(port, () => {
  console.log(`Listing on ${port}`);
});
