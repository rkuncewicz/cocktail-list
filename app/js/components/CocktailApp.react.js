var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CocktailStore = require('../stores/CocktailStore'),
    Cocktail = require('../utils/Cocktail'),
    CocktailList = require('./CocktailList.react'),
    _ = require('lodash'),
    superagent = require('superagent');

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
            }),
            gridLayout: 0
        };
    },

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    changeGrid: function(value, event) {
        this.setState({gridLayout: value});
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="CocktailApp">
                <div className="app-title">
                    <h1>Cocktail List</h1>
                </div>
                <div className="grid-selection">
                    <button onClick={this.changeGrid.bind(this, 0)}>
                        <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
                    </button>
                    <button onClick={this.changeGrid.bind(this, 1)}>
                        <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                    </button>
                    <button onClick={this.changeGrid.bind(this, 2)}>
                        <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                    </button>
                </div>
                <CocktailList gridLayout={this.state.gridLayout} cocktails={this.state.cocktails} />
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = CocktailApp;
