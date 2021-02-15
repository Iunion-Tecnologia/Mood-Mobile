import { createStore, Store } from 'redux';
import { AuthState } from './ducks/auth/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  auth: AuthState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
);

export default store;
