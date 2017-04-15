// Actions

export const setCocktails = (cocktails) => ({
  type: 'SET',
  cocktails,
});

// Reducers

const cocktailsReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET':
      return action.cocktails;
    default:
      return state;
  }
};

export default cocktailsReducer;
