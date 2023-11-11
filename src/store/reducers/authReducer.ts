import {GET_USERS, AUTH_USER} from '../_constans';
import {IAuthState, IAction} from '../_types';

const defaultState: IAuthState = {
  users: [],
  isAuth: false,
  user: {
    email: '',
    firstName: '',
    gender: '',
    id: null,
    image: '',
    lastName: '',
    token: '',
    username: '',
  },
};

export const authReducer = (
  state = defaultState,
  action: IAction,
): IAuthState => {
  // console.log('action.payload', action.type, action.payload);

  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.payload};
    case AUTH_USER:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
