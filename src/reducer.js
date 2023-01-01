export const initialState = {
    user: null,
  };
  
export const actionTypes = {
  SET_USER: 'SET_USER',
  SIGN_OUT: 'SIGN_OUT',
  LOGIN_AS_GUEST: 'LOGIN_AS_GUEST',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    case actionTypes.LOGIN_AS_GUEST:
      // Set a dummy user object for the guest
      const user = {
        displayName: 'Guest',
        email: 'guest@example.com',
        isAnonymous: true,
      };
      return {
        ...state,
        user: user,
      };
    default:
      return state;
  }
};

export default reducer