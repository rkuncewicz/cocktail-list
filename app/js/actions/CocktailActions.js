var AppDispatcher = require('../dispatcher/AppDispatcher')
    CocktailConstants = require('../constants/CocktailConstants');

module.exports = {
  // Receive inital product data
  receiveCocktails: function(data) {
    AppDispatcher.handleAction({
      actionType: CocktailConstants.RECEIVE_DATA,
      data: data
    })
  }
};
