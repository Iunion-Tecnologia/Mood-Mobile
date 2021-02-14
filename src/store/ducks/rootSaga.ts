import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { load } from './auth/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.LOGIN_REQUEST, load)]);
}
