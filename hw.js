// const pancakeRecipe = withMetrics(30, 200)(createRecipe('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.'))
const func = withMetrics(30, 200);
const createRecipeResult = createRecipe(
  "Pancakes",
  "Mix flour, eggs, and milk. Cook on a griddle."
);
const pancakeRecipe = func(createRecipeResult);
/** Expected result
 * Instructions for Pancakes:
 * Mix flour, eggs, and milk. Cook on a griddle.for 30 seconds. Contain 200 calories
 */
pancakeRecipe.printInstructions();
