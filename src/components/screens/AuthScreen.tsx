import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {useAppSelector, useAppDispatch} from '../../store/hooks/redux';
import * as api from '../../utils/functions';
import {AppColors} from '../../utils/appStyles/AppColors';
import AppContainers from '../../utils/appStyles/AppContainers';

const AuthScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const authStore = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(api.getUsers());
  }, []);

  return (
    <View style={[AppContainers.mainContainer, styles.container]}>
      <Text style={styles.title}>Выбор пользователя для авторизации</Text>

      <ScrollView>
        {authStore.users.length > 0 &&
          authStore.users.map(user => (
            <TouchableOpacity style={[styles.userBtn]} key={user.id}>
              <Text>{user.firstName}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
  },
  userBtn: {
    borderWidth: 2,
    borderColor: AppColors.lightBlue,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});
