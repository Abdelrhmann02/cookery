const RecipesDAO = require("../models/recipesModel");
const recipes = new RecipesDAO({ filename: "recipes.db", autoload: true });

recipes.init();

exports.listRecipes = function (req, res) {
  recipes.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.listBreakfast = function (req, res) {
  recipes.getBreakfast()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};