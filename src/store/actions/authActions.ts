import {GET_USERS} from '../_constans';
import {IAction} from '../_types';

export const actionGetUsers = (payload: any): IAction => ({
  type: GET_USERS,
  payload,
});
