const nedb = require("nedb");

class Recipes {
  constructor(recipeFilePath) {
    console.log(recipeFilePath);
    if (recipeFilePath) {
      this.recipes = new nedb(recipeFilePath);
      console.log("recipes connected to " + recipeFilePath);
      recipeFilePath;
    } else {
      this.recipes = new nedb();
    }
  }

  init() {
    this.recipes.insert({
      name: "Breakfast Burrito",
      description: "This low carb breakfast is quick and easy. This is a tasty breakfast with plenty of protein and fiber. Take the tortillas out of the refrigerator so that can come to room temperature while you prepare the filling.",
      category: "Breakfast",
      prep_time: 5,
      cook_time: 5,
      serving: 2,
      ingredients: ['2 low carb whole wheat tortillas','4 eggs','2 tablespoons cream','1 pinch salt and white pepper','2 ounces Cheddar cheese, shredded'],
      steps:['In a mixing bowl, beat the eggs with the cream, salsa, cumin and a pinch of salt and pepper.',' In a non stick skillet over medium-high heat, melt the butter and then scramble the eggs. Just before they are set, add the cheese and fold-in until it begins to melt.', ' Lay the tortillas on a flat surface. Divide the eggs equally between the two and place on the bottom third of each tortilla. Fold the bottom third over tucking in. Fold in the two sides and then roll up. Serve.'],
      rating: [],
      photo_location:"./images/SouthwesternBreakfastBurrito.jpg"
    });

    this.recipes.insert({
      name: "Waffles",
      description: "This waffle recipe is the only one you'll need to make homemade waffles with your waffle iron. Simple pantry ingredients mix up quickly in this easy batter that can be used right away or stored in the refrigerator for up to a week. Serve waffles hot with whipped cream and fresh fruit or with butter and maple syrup for either breakfast, brunch, or a snack.",
      category: "Breakfast",
      prep_time: 10,
      cook_time: 15,
      serving: 6,
      ingredients: ['Eggs', 'Flour','Milk','Oil','Sugar','Baking poweder','Salt','Vanilla'],
      steps:['Preheat a waffle iron according to manufacturer instructions.',' Whisk eggs in a large bowl until light and fluffy. Add flour, milk, and vegetable oil and mix to combine. Whisk in sugar, then mix in baking powder, salt, and vanilla just until smooth, being careful not to overmix.',' Spray the preheated waffle iron with nonstick spray. Pour batter onto the hot waffle iron and cook until golden brown and the iron stops steaming, 3 to 5 minutes.'],      
      rating: [],
      photo_location:"./images/waffle.jpg"
    });

    this.recipes.insert({
      name: "French Crepes",
      description: "French crêpes are good for weekend breakfasts, or even for desserts. Serve rolled up and filled with jam or fruit and whipped cream.",
      category: "Breakfast",
      prep_time: 5,
      cook_time: 25,
      serving: 12,
      ingredients: ['1 cup all-purpose flour','1 teaspoon white sugar','3 eggs','2 cups milk','2 tablespoons butter'],
      steps:['Sift flour, sugar, and salt into a bowl; set aside. Beat eggs and milk together in a large bowl with an electric mixer. Beat in flour mixture until smooth; stir in melted butter.',' Lightly grease a griddle or frying pan; heat over medium-high heat.',' Pour or scoop the batter onto the griddle, using approximately 2 tablespoons for each crêpe. Immediately rotate the skillet to spread batter out in a thin layer. Cook until the top of the crêpe is no longer wet and the bottom has turned light brown, 1 to 2 minutes. Shake the pan or loosen with a spatula; turn or flip it over and cook until other side has turned light brown, about 1 minute more. Repeat with remaining batter.'],      
      rating: [],
      photo_location:"./images/crepe.jpg"
    });

    this.recipes.insert({
      name: "Banana Pancakes",
      description: "Crowd-pleasing banana pancakes made from scratch that are ready in minutes. A fun twist on ordinary pancakes.",
      category: "Breakfast",
      prep_time: 5,
      cook_time: 10,
      serving: 6,
      ingredients: ['1 cup all-purpose flour','1 teaspoon white sugar','2 teaspoons baking powder','1 egg','1 cup milk','2 bananas'],
      steps:[' Combine flour, white sugar, baking powder, and salt in a bowl. Mix together egg, milk, vegetable oil, and bananas in a second bowl.',' Stir flour mixture into banana mixture; batter will be slightly lumpy.',' Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Cook until pancakes are golden brown, 3 to 5 minutes per side. Serve hot.'],      
      rating: [],
      photo_location:"./images/pancakes.jpg"
    });

    this.recipes.insert({
      name: "Sausage Balls",
      description: "These 3-ingredient sausage balls are a real crowd pleaser, whether you serve them as a breakfast or brunch treat, a party appetizer, a game-day nibble, or a holiday hors d'oeuvre. Savory sausage, store-bought biscuit mix, and sharp Cheddar cheese team up for savory, cheesy flavor that can't be beat. These are so yummy! My family makes every Christmas morning.",
      category: "Breakfast",
      prep_time: 10,
      cook_time: 20,
      serving: 15,
      ingredients: ['1 pound ground pork sausage','2 cups biscuit baking mix','1 pound sharp Cheddar cheese, shredded'],
      steps:['Preheat the oven to 350 degrees F (175 degrees C).',' Combine room temperature sausage and biscuit mix in a large bowl; mix with your hands until well combined. Add shredded Cheddar cheese and mix until fully incorporated. Roll mixture into about 30 walnut-sized balls; transfer to a baking sheet.',' Bake in the preheated oven until golden brown and sausage is cooked through, 20 to 25 minutes.'],      
      rating: [],
      photo_location:"./images/sausage.jpg"
    });
  }

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.recipes.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

  getBreakfast() {
    return new Promise((resolve, reject) => {
      this.recipes.find({"category": "Breakfast"}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function Breakfast() returns: ", entries);
        }
      });
    });
  }
  
}
module.exports = Recipes;
