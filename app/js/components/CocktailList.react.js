var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    CocktailStore = require('../stores/CocktailStore'),
    Cocktail = require('./Cocktail.react'),
    _ = require('lodash'),
    superagent = require('superagent');

var cocktailsGrid = {

}

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
        var self = this;
        var cocktails = this.props.cocktails;

        var cocktailNames = [];
        var list = [];
        var rowNum = this.props.gridLayout[0];
        var colNum = this.props.gridLayout[1];
        for (i=0; i < cocktails.length; i = i + rowNum ) {
            var cocktailRow = [];
            for (j=0; j < rowNum; j++) {
                var columnNum = i + j;
                cocktailRow.push(
                    <div className={"grid-row-" + rowNum}>
                        <Cocktail key={columnNum} cocktail={cocktails[columnNum]} />
                    </div>
                );
            }

            list.push(
                <div className="row cocktail-row">
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
