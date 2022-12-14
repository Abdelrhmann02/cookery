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
      photo_location:"/images/SouthwesternBreakfastBurrito.jpg"
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
      photo_location:"/images/waffle.jpg"
    });

    this.recipes.insert({
      name: "French Crepes",
      description: "French cr??pes are good for weekend breakfasts, or even for desserts. Serve rolled up and filled with jam or fruit and whipped cream.",
      category: "Breakfast",
      prep_time: 5,
      cook_time: 25,
      serving: 12,
      ingredients: ['1 cup all-purpose flour','1 teaspoon white sugar','3 eggs','2 cups milk','2 tablespoons butter'],
      steps:['Sift flour, sugar, and salt into a bowl; set aside. Beat eggs and milk together in a large bowl with an electric mixer. Beat in flour mixture until smooth; stir in melted butter.',' Lightly grease a griddle or frying pan; heat over medium-high heat.',' Pour or scoop the batter onto the griddle, using approximately 2 tablespoons for each cr??pe. Immediately rotate the skillet to spread batter out in a thin layer. Cook until the top of the cr??pe is no longer wet and the bottom has turned light brown, 1 to 2 minutes. Shake the pan or loosen with a spatula; turn or flip it over and cook until other side has turned light brown, about 1 minute more. Repeat with remaining batter.'],      
      rating: [],
      photo_location:"/images/crepe.jpg"
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
      photo_location:"/images/pancakes.jpg"
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
      photo_location:"/images/sausage.jpg"
    });

    this.recipes.insert({
      name: "Chicken pasta bake",
      description: "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad.",
      category: "Dinner",
      prep_time: 30,
      cook_time: 45,
      serving: 6,
      ingredients: ['4 tbsp olive oil','1 onion, finely chopped','2 garlic cloves, crushed','2 x 400g cans chopped tomatoes','1 tsp caster sugar','4 skinless chicken breasts, sliced into strips'],
      steps:['Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone.','Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.','Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.'],      
      rating: [],
      photo_location:"/images/chicken.jpg"
    });

    this.recipes.insert({
      name: "Vegetarian lasagne",
      description: "Make our easy vegetarian lasagne using just a handful of ingredients. You can use ready-made tomato sauce and white sauce, or batch cook the sauces and freeze them",
      category: "Dinner",
      prep_time: 25,
      cook_time: 70,
      serving: 6,
      ingredients: ['3 red peppers, cut into large chunks','2 aubergines, cut into ?? cm thick slices','8 tbsp olive oil, plus extra for the dish','300g lasagne sheets','125g mozzarella'],
      steps:['To make the tomato sauce, heat the olive oil in a saucepan. Add the onions, garlic and carrot. Cook for 5-7 mins over a medium heat until softened. Turn up the heat a little and stir in the tomato pur??e. Cook for 1 min, pour in the white wine, then cook for 5 mins until this has reduced by two-thirds. Pour over the chopped tomatoes and add the basil leaves. Bring to the boil then simmer for 20 mins. Leave to cool then whizz in a food processor. Will keep, cooled, in the fridge for up to three days or frozen for three months.','To make the white sauce, melt the butter in a saucepan, stir in the plain flour, then cook for 2 mins. Slowly whisk in the milk, then bring to the boil, stirring. Turn down the heat, then cook until the sauce starts to thicken and coats the back of a wooden spoon. Will keep, cooled, in the fridge for up to three days or frozen for three months.','Heat the oven to 200C/180C fan/gas 6. Lightly oil two large baking trays and add the peppers and aubergines. Toss with the olive oil, season well, then roast for 25 mins until lightly browned.','Reduce the oven to 180C/160C fan/gas 4. Lightly oil a 30 x 20cm ovenproof dish. Arrange a layer of the vegetables on the bottom, then pour over a third of the tomato sauce. Top with a layer of lasagne sheets, then drizzle over a quarter of the white sauce. Repeat until you have three layers of pasta.','Spoon the remaining white sauce over the pasta, making sure the whole surface is covered, then scatter over the mozzarella and cherry tomatoes. Bake for 45 mins until bubbling and golden.'],      
      rating: [],
      photo_location:"/images/lasagne.jpg"
    });

    this.recipes.insert({
      name: "venison pie",
      description: "Make a venison pie packed with pancetta, mushrooms and red wine, topped with golden puff pastry. It's cooked low and slow for beautifully tender meat",
      category: "Dinner",
      prep_time: 15,
      cook_time: 180,
      serving: 6,
      ingredients: ['2?? tbsp sunflower oil','1kg diced venison','100g smoked bacon lardons','2 onions, roughly chopped','2 bay leaves','3 tbsp plain flour','1 tbsp ketchup','150ml red wine'],
      steps:['Heat the oven to 160C/140C fan/gas 3. Heat half the oil in a large flameproof casserole, brown the venison well in batches for 10 mins over a high heat, then set aside. Scatter the bacon into the pan with another ?? tbsp oil and sizzle for 8-10 mins until golden. Stir through the onions and bay leaves, drizzling with the remaining oil, and cook over a low heat for 5 mins until browned. Lower the heat to medium, then add the mushrooms and cook for a few minutes more until softened.','Scatter over the flour, stirring until the flour turns brown. Tip the meat and any juices back into the pan along with the ketchup and give it all a good stir. Pour over the wine or ale, if using, and bring to the boil. Bubble for a few minutes, then pour over the stock. Season and bring to a simmer. Cover with a lid and put in the oven for about 2 hrs until the meat is tender. Will keep chilled for three days or frozen for up to three months. Leave to cool completely first. Defrost in a fridge overnight before reheating thoroughly in a microwave or pan until the meat is piping hot.','To make the pie, heat the oven to 220C/200C fan/gas 7. Tip the filling into a 24-26cm rimmed pie dish and brush the rim of the dish with some of the egg yolk. Unravel the pastry, drape it over the dish and use a knife to trim and press against the rim. Re-roll the trimmings to make a decoration, if you like. Will keep covered and frozen for up to three months. Defrost fully before continuing with step three.','Brush the pie with the remaining egg yolk and season with sea salt flakes, if you like. Make a few little slits in the centre of the pie to allow the steam to escape, and bake for 30-35 mins until deep golden.'],      
      rating: [],
      photo_location:"/images/pie.jpg"
    });

    this.recipes.insert({
      name: "Meatball & tomato soup",
      description: "Get three of your 5-a-day in one serving with this healthy, low-calorie tomato soup. The addition of meatballs and giant couscous means it's filling, too",
      category: "Dinner",
      prep_time: 5,
      cook_time: 15,
      serving: 4,
      ingredients: ['1?? tbsp rapeseed oil','1 onion, finely chopped','2 red peppers','1 garlic clove'],
      steps:['Heat the oil in a saucepan. Fry the onion and peppers for 7 mins, then stir through the garlic and chilli flakes and cook for 1 min. Add the tomatoes, giant couscous and veg stock and bring to a simmer.','Season to taste, then add the meatballs and spinach. Simmer for 5-7 mins or until cooked through. Ladle into bowls and top with the basil and some parmesan, if you like.'],      
      rating: [],
      photo_location:"/images/meatball.jpg"
    });

    this.recipes.insert({
      name: "Pork souvlaki",
      description: "Serve our speedy pork souvlaki skewers when you???re in need of a quick and easy midweek meal. Serve with flatbreads and yogurt and chilli sauces on the side",
      category: "Dinner",
      prep_time: 15,
      cook_time: 10,
      serving: 4,
      ingredients: ['400g lean pork shoulder, cut into 2cm chunks','1 tbsp olive oil','1 lemon, zested and juiced','?? tsp hot paprika','100ml fat-free yogurt','1 small garlic clove'],
      steps:['Put the pork in a large bowl with the oil, oregano, lemon zest and juice and paprika as well as a good pinch of salt. Toss everything together to combine and leave to marinate for 10 mins.','Combine the yogurt, garlic and cucumber together in a bowl. Season with salt and set aside.','Heat the grill to high. Thread the marinated pork and the peppers on four metal skewers, alternating between the pork and peppers as you go. Place on a non-stick baking sheet and grill for 3-4 mins on each side, or until cooked through and golden brown.','Serve with the lettuce, yogurt mixture and chilli sauce, and flatbreads, if you like.'],      
      rating: [],
      photo_location:"/images/pork.jpg"
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

  getDinner() {
    return new Promise((resolve, reject) => {
      this.recipes.find({"category": "Dinner"}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function Dinner() returns: ", entries);
        }
      });
    });
  }
  
}
module.exports = Recipes;
