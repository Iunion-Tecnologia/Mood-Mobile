import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loginSuccess, loginFailure } from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* load({ payload }: ReturnType<typeof loginSuccess>) {
  try {
    const response = yield call(api.post, '/user/signin', payload.data);
    yield put(loginSuccess(response.data));
  } catch (err) {
    yield put(loginFailure());
  }
}
