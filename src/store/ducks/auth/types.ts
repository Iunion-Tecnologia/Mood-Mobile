/**
 * Action types
 */

// eslint-disable-next-line no-shadow
export enum AuthTypes {
  LOGIN = '@auth/LOGIN_REQUEST',
  LOGOUT = '@auth/LOGOUT',
}

/**
 * Data types
 */

export interface User {
  id: string;
  avatar_url: string | null;
  email: string;
  name: string;
  bio: string;
  nick: string;
  following_count: number;
  followers_count: number;
  post_count: number;
}

export interface IRequest {
  token: string;
  user: User;
}
/**
 * State types
 */

export interface AuthState {
  readonly token: string | null;
  readonly user: User | null;
}
