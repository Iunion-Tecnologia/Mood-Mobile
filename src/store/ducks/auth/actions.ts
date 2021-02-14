import { action } from 'typesafe-actions';
import { AuthTypes, IRequest, IResponse } from './types';

export const loginRequest = (
  data: IRequest,
): { type: AuthTypes.LOGIN_REQUEST } =>
  action(AuthTypes.LOGIN_REQUEST, { data });

export const loginSuccess = (
  data: IResponse,
): { type: AuthTypes.LOGIN_SUCCESS } =>
  action(AuthTypes.LOGIN_SUCCESS, { data });

export const loginFailure = (): { type: AuthTypes.LOGIN_FAILURE } =>
  action(AuthTypes.LOGIN_FAILURE);

export const logout = (): { type: AuthTypes.LOGOUT } =>
  action(AuthTypes.LOGOUT);
