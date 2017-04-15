const getRecipe = function (event, context) {
  console.log(event);
  console.log(context);
};

const createRecipe = function (event, context) {
  console.log(event);
  console.log(context);
};

const replaceRecipe = function (event, context) {
  console.log(event);
  console.log(context);
};

const deleteRecipe = function (event, context) {
  console.log(event);
  console.log(context);
};

module.exports = {
  getRecipe,
  createRecipe,
  replaceRecipe,
  deleteRecipe,
};
