import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';
import { showMessage } from 'react-native-flash-message';

const INITIAL_STATE: AuthState = {
  token: null,
  user: null,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return {
        ...state,
        user: action.payload.data.user,
        token: action.payload.data.token,
      };
    case AuthTypes.LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return { ...state };
  }
};

export default reducer;
