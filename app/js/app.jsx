var ReactDom = require('react-dom'),
    React = require('react'),
	CocktailApp = require('./components/CocktailApp.react'),
    ProductData = require('./ProductData');
    CocktailApi = require('./utils/CocktailApi');
require('bootstrap-webpack');
require('../less/index.less');

ProductData.init();
CocktailApi.getCocktailData();

// Render Controller View
ReactDom.render(
	<CocktailApp />,
	document.getElementById('cocktail-list')
);
