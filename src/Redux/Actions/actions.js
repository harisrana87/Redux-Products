export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});