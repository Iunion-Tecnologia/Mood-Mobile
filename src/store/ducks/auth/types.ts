/**
 * Action types
 */

// eslint-disable-next-line no-shadow
export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  LOGOUT = '@auth/LOGOUT',
}

/**
 * Data types
 */

export interface User {
  id: string;
  avatar: string | null;
  email: string;
  name: string;
}

export interface IRequest {
  email: string;
  password: string;
}

export interface IResponse {
  token: string;
  user: {
    id: string;
    avatar: string | null;
    email: string;
    name: string;
  };
}
/**
 * State types
 */

export interface AuthState {
  readonly loading: boolean;
  readonly error: boolean;
  readonly token: string | null;
  readonly user: User | null;
}
