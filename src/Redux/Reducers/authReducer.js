const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      // Handle other actions if needed
  
      default:
        return state;
    }
  }
  
  export default authReducer;