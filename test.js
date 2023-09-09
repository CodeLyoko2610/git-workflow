//---------------Function declarations------------------
const createRecipe = function (name, instructions) {
  return {
    name, //Pancake
    instructions, // Mix flour, eggs, and milk. Cook on a griddle.
  };
};

const withMetrics = function (time, calories) {
  return function (recipe) {
    const { name, instructions } = recipe; // returned function accepting parameter

    return {
      name,
      instructions,
      printInstructions: function () {
        // console.log(`DEBUG: context`, this);

        console.log(
          `Instructions for ${this.name}: ${this.instructions} for ${time} seconds. Contain ${calories} calories`
        );
      },
    };
  };
};

//------------------Run------------------
const createRecipeResult = createRecipe(
  "Pancakes",
  "Mix flour, eggs, and milk. Cook on a griddle."
);

const pancakeRecipe = withMetrics(30, 200)(createRecipeResult); // withMetrics return function. Function requires param.

pancakeRecipe.printInstructions();
