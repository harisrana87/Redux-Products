import { createStore, combineReducers } from 'redux';
import authReducer from './Reducers/authReducer';
import signupReducer from './Reducers/signupReducer';
import userReducer from './Reducers/userReducer';
import cartReducer from './Reducers/cartReducer'; // Import the cart reducer

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  user: userReducer,
  cart: cartReducer, 
});

const store = createStore(rootReducer);

export default store;