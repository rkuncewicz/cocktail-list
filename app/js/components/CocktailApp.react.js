var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CocktailStore = require('../stores/CocktailStore'),
    Cocktail = require('../utils/Cocktail'),
    CocktailList = require('./CocktailList.react'),
    CocktailIndex = require('./CocktailIndex.react'),
    Search = require('./Search.react'),
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
            gridLayout: [1,1],
            searchValue: ''
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

    handleSearchChange: function (event) {
        this.setState({searchValue: event.target.value});
    },

    // Render our child components, passing state via props
    render: function() {
        return (
            <div className="CocktailApp">
                <div className="app-title">
                    <h1>Cocktail List</h1>
                </div>
                <div className="grid-selection">
                    <button onClick={this.changeGrid.bind(this, [1,1])}>
                        <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
                    </button>
                    <button onClick={this.changeGrid.bind(this, [2,1])}>
                        <div className="double-grid-icon">
                            <span className="glyphicon glyphicon-stop glyphicon-doublegrid double-grid-left" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-stop glyphicon-doublegrid" aria-hidden="true"></span>
                        </div>
                    </button>
                    <button onClick={this.changeGrid.bind(this, [2,2])}>
                        <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                    </button>
                    <button onClick={this.changeGrid.bind(this, [3,1])}>
                        <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                    </button>
                </div>
                <Search handleSearchChange={this.handleSearchChange} searchValue={this.state.searchValue} />
                <CocktailIndex cocktails={this.state.cocktails} />
                <CocktailList gridLayout={this.state.gridLayout} cocktails={this.state.cocktails} filter={this.state.searchValue}/>
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getState());
    }

});

module.exports = CocktailApp;
