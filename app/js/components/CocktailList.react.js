var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CocktailStore = require('../stores/CocktailStore'),
    Cocktail = require('./Cocktail.react'),
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

    filterCocktails: function(cocktails) {
        var self = this;
        return _.filter(cocktails, function(cocktail) {
            var cocktailName = cocktail.name.toLowerCase();
            var filter = self.props.filter.toLowerCase();
            if (cocktailName.search(filter) != -1)
                return cocktail;
        });       
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        var cocktails = self.filterCocktails(this.props.cocktails);

        var cocktailNames = [];
        var list = [];
        var rowNum = this.props.gridLayout[0];
        var colNum = this.props.gridLayout[1];
        console.log(cocktails);
        for (i=0; i < cocktails.length; i = i + rowNum ) {
            var cocktailRow = [];
            for (j=0; j < rowNum; j++) {
                var columnNum = i + j;
                var cocktail = cocktails[columnNum];
                cocktailRow.push(
                    <div className={"grid-row-" + rowNum}>
                        <Cocktail key={columnNum} cocktail={cocktail} />
                    </div>
                );
            }
            var divider = <hr/>;
            if (i == 0) divider = undefined;
            list.push(
                <div className="row cocktail-row">
                    { divider }
                    {cocktailRow}
                </div>
            )
        }

        return (
            <div>
                {list}
            </div>
        );
    }
});

module.exports = CocktailList;
