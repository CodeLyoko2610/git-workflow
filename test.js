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
      name, // add to returned object's context
      instructions, // add to returned object's context

      printInstructions: function () {
        // console.log(`DEBUG: context`, this);

        console.log(
          `Instructions for ${this.name}: ${this.instructions} for ${time} seconds. Contain ${calories} calories`
        );
      },
      printInstructionsArrow: () => {
        console.log(
          `Instructions for ${name}: ${instructions} for ${time} seconds. Contain ${calories} calories`
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

const pancakeRecipe = withMetrics(30, 200)(createRecipeResult); // withMetrics returns 1 function. The returned function requires param.

pancakeRecipe.printInstructions(); // function expression, original bindings
pancakeRecipe.printInstructions.bind({ name: "asdf", instructions: "asdf" })(); // function expression, new binding
pancakeRecipe.printInstructionsArrow.bind({
  name: "asdf",
  instructions: "asdf",
})(); // arrow function, no bindings
