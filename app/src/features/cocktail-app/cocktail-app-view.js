import { connect } from 'react-redux';
import CocktailAppLayout from './cocktail-app-layout';
// import { set } from './duck';

const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

const mapDispatchToProps = () => ({});

const CocktailApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CocktailAppLayout);

export default CocktailApp;
