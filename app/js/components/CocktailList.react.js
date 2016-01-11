var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CocktailStore = require('../stores/CocktailStore'),
    Cocktail = require('../utils/Cocktail'),
    _ = require('lodash'),
    superagent = require('superagent');

// Define main Controller View
var CocktailList = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        console.log(this.props.cocktails);
        console.log(this.props);
        var self = this;
        var cocktails = this.props.cocktails;
        var cocktailNames = [];
        return (
            <div>
                {cocktails.map(function(cocktail) {
                    cocktailNames.push(cocktail.name);
                    return (
                        <div className="cocktail" key={cocktail.name}>
                            <div className="cocktail-title">
                                <h3>{cocktail.name}</h3>
                            </div>
                            <div className="cocktail-img">
                                <img src={"./static/" + cocktail.photo}/>
                            </div>
                            <div className="cocktail-info-wrapper">
                                <div className="ingredients">
                                    <h4>Ingredients</h4>
                                    <ul>
                                        {cocktail.ingredients.map(function(ingredient, index) {
                                            return (
                                                <li key={index}>{ingredient.main.format()}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="directions">
                                    <h4>Directions</h4>
                                    <ol>
                                        {cocktail.directions.map(function(direction, index) {
                                            return (
                                                <li key={index}>{direction}</li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    );
                })};
            </div>
        );
    }
});

module.exports = CocktailList;
