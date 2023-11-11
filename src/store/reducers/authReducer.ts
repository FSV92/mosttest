import {GET_USERS} from '../_constans';
import {IUsersState, IAction} from '../_types';

const defaultState: IUsersState = {
  users: [],
};

export const authReducer = (
  state = defaultState,
  action: IAction,
): IUsersState => {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
};
