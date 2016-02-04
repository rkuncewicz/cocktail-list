var React = require('react');

// Define main Controller View
var Cocktail = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        var cocktail = this.props.cocktail;
        if (!cocktail) return (<div></div>);
        return (
            <div className="cocktail" id={cocktail.name} key={cocktail.name}>
                <div className="cocktail-title-wrapper">
                    <div className="cocktail-title">
                        <h3>{cocktail.name}</h3>
                    </div>
                </div>
                <div className="cocktail-main-wrapper">
                    <div className="cocktail-img">
                        <a href={cocktail.url}>
                            <img src={"./static/" + cocktail.photo}/>
                        </a>
                    </div>
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
    }
});

module.exports = Cocktail;
