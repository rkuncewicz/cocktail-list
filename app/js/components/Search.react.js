var React = require('react');

// Define main Controller View
var Search = React.createClass({

    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    },

    // Render our child components, passing state via props
    render: function() {
        var self = this;
        var searchValue = this.props.searchValue;
        return (
            <div className="cocktail-search">
                <input 
                    type="text" 
                    value={searchValue}
                    onChange={this.props.handleSearchChange}
                    className="form-control" 
                    placeholder="Search for...">
                </input>
            </div>
        );
    }
});

module.exports = Search;
