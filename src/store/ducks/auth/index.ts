import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  error: false,
  token: null,
  user: null,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload.data.user,
        token: action.payload.data.token,
      };
    case AuthTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };
    case AuthTypes.LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return { ...state };
  }
};

export default reducer;
