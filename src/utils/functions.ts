import {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as links from './links';
import {actionGetUsers, actionAuthUser} from '../store/actions/authActions';
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

export const authUsers = (username: string, password: string) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .post(
        links.authUser,
        {
          username,
          password,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      )
      .then(response => {
        if (response.status == 200) {
          dispatch(actionAuthUser(response.data, true));

          AsyncStorage.setItem('@savedUser', JSON.stringify(response.data));
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};
