import {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';

import * as links from './links';
import {actionGetUsers} from '../store/actions/authActions';
import {RootStateType} from '../store/store';
import {IAction} from '../store/_types';

export const getUsers = () => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getUsers, {params: {limit: 10}})
      .then(response => {
        dispatch(actionGetUsers(response.data.users));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
