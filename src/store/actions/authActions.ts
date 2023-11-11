import {GET_USERS, AUTH_USER} from '../_constans';
import {IAction} from '../_types';

export const actionGetUsers = (payload: any): IAction => ({
  type: GET_USERS,
  payload,
});

export const actionAuthUser = (payload: any, isAuth: boolean): IAction => ({
  type: AUTH_USER,
  payload: {user: payload, isAuth},
});
