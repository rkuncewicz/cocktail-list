var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CocktailStore = require('../stores/CocktailStore'),
    Cocktail = require('../utils/Cocktail'),
    _ = require('lodash');

// Define main Controller View
var CocktailApp = React.createClass({

    // Get initial state from stores
    getInitialState: function() {
        return { 
            cocktails: _.map(CocktailStore.getCocktails(), function(cocktail) {
                return new Cocktail(
                    cocktail.name, 
                    cocktail.author, 
                    cocktail.photo, 
                    cocktail.url,
                    cocktail.directions,
                    cocktail.ingredients);
            })
        };
    },

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        console.log(this.state.cocktails);
        var cocktails = this.state.cocktails;
        var cocktailNames = [];
        var list = cocktails.map(function(cocktail) {
            cocktailNames.push(cocktail.name);
            return (
                <div className="cocktail" key={cocktail.name}>
                    <h3>{cocktail.name}</h3>
                    <ul>
                        <li>
                            <h4>Author: {cocktail.author}</h4>
                            <h4>Photo:<a> {cocktail.photo}</a></h4>
                            <h4>Url: <a>{cocktail.url}</a></h4>
                            <h4>Ingredients: </h4>
                            <ul>
                            {cocktail.ingredients.map(function(ingredient) {
                                return (
                                    <li key={ingredient.main.item}>{ingredient.main.item}</li>
                                )
                            })}
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        });

        return (
            <div className="CocktailApp container-fluid">
                <h1>Cocktail List</h1>
                {list}
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = CocktailApp;
