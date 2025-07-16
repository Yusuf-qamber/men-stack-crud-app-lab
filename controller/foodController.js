const express = require("express");
const router = express.Router();
const Food = require("../models/food");

router.get("/", async (req, res) => {
  const allFood = await Food.find();
  console.log("allFood: ", allFood);
  res.render("food/index.ejs", {
    allFood: allFood,
  });
});
// RENDER A NEW FORM
router.get("/new", (req, res) => {
  res.render("food/new.ejs");
});

// POST FORM DATA TO DATABASE
router.post("/", async (req, res) => {
  console.log(req.body);
  await Food.create(req.body);
  res.redirect("/food");
});

//SHOW ONE ITEM of FOOD
router.get("/:foodId", async (req, res) => {
  console.log("Params: ", req.params.foodId);
  const foundFood = await Food.findById(req.params.foodId);
  res.render("food/show.ejs", { foundFood: foundFood });
});

router.delete("/:foodId", async (req, res) => {
  await Food.findByIdAndDelete(req.params.foodId);
  res.send("Item have been deleted");
});

router.get("/:foodId/edit", async (req, res) => {
  const foundFood = await Food.findById(req.params.foodId);
  res.render("food/edit.ejs", { foundFood: foundFood });
});

router.put("/:foodId", async (req, res) => {
  console.log(req.body);
  await Food.findByIdAndUpdate(req.params.foodId, req.body);
  res.redirect(`/food/${req.params.foodId}`);
});
// ADD FOOD

module.exports = router;
