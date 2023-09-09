const createRecipe = function (name, instructions) {
  return {
    name, //Pancake
    instructions, // Mix flour, eggs, and milk. Cook on a griddle.
  };
};

const withMetrics = function (time, calories) {
  return function (recipe) {
    const { name, instructions } = recipe;

    return {
      name,
      instructions,
      printInstructions: function () {
        console.log(
          `Instructions for ${this.name}: ${this.instructions} for ${time} seconds. Contain ${calories} calories`
        );
      },
    };
  };
};

const createRecipeResult = createRecipe(
  "Pancakes",
  "Mix flour, eggs, and milk. Cook on a griddle."
);

const pancakeRecipe = withMetrics(30, 200)(createRecipeResult);

pancakeRecipe.printInstructions();
