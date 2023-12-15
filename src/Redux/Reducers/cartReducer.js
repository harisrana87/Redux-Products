const initialState = {
  products: [],
  total: 0,
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedProducts = [...state.products, action.payload];
      const updatedTotal = updatedProducts.reduce((total, product) => total + product.price, 0);
      const updatedCount = updatedProducts.length;

      return {
        ...state,
        products: updatedProducts,
        total: updatedTotal,
        count: updatedCount,
      };
    default:
      return state;
  }
};

export default cartReducer;