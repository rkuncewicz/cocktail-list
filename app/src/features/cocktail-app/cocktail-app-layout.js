// eslint-disable-next-line
import React, { Component, PropTypes } from 'react';

class CocktailApp extends Component {
  componentDidMount = () => {
  };

  render() {
    return (
      <div className="cocktail-app">
        { this.props.cocktails.map(cocktail => (
          <div>
            <span>{cocktail.name}</span>
          </div>
          ))
        }
      </div>
    );
  }
}

const { arrayOf, shape, string } = PropTypes;

CocktailApp.propTypes = {
  cocktails: arrayOf(shape({
    name: string,
    author: string,
    photo: string,
    url: string,
    directions: arrayOf(string),
    ingredients: arrayOf(shape({})),
  })),
};

CocktailApp.defaultProps = {
  cocktails: [],
};

export default CocktailApp;
