CocktailActions = require('../actions/CocktailActions'),

module.exports = {
    getCocktailData: function() {
        var data = JSON.parse(localStorage.getItem('cocktails'));
        CocktailActions.receiveCocktails(data);
    }

};
