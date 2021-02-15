import { action } from 'typesafe-actions';
import { AuthTypes, IRequest, IResponse } from './types';

export const login = (
  data: IRequest,
): { type: AuthTypes.LOGIN } =>
  action(AuthTypes.LOGIN, { data });

export const logout = (): { type: AuthTypes.LOGOUT } =>
  action(AuthTypes.LOGOUT);
