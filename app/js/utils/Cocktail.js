var _ = require('lodash');

class Size {
    constructor(quantity, unit) {
        this.quantity = quantity;
        this.unit = unit;
    }
}

class Ingredient {
    constructor(size, item, optional) {
        this.size = size ? new Size(size.quantity, size.unit) : null;
        this.item = item;
        this.optional = optional || false;
    }
}

class Cocktail {
    constructor(name, author, photo, url, directions, ingredients) {
        this.name = name;
        this.author = author;
        this.photo = photo;
        this.url = url;
        this.directions = directions;

        this.ingredients = _.map(ingredients, function(ingredient) {
            return {
                main: new Ingredient(ingredient.size || null, ingredient.ingredient),
                alternatives: 
                    ingredient.alternatives
                    ? _.map(ingredient.alternatives, function(alternative) {
                        return new Ingredient(alternative.size, alternative.ingredient);
                        })
                    : null
            };
        });
    }
}

module.exports = Cocktail;
