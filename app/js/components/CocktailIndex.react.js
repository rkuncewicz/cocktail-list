var React = require('react');

// Define main Controller View
var CocktailIndex = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        var cocktails = this.props.cocktails;
        return (
            <div className="cocktail-index">
                <div className="cocktail-index-title">
                    <h2>Cocktail Index</h2>
                </div>
                 <ul>
                    {cocktails.map(function(cocktail, index) {
                        return (
                            <li key={index}>
                                <a href={'#' + cocktail.name}>{cocktail.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = CocktailIndex;
