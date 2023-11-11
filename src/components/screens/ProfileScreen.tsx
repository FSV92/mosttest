import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {useAppSelector, useAppDispatch} from '../../store/hooks/redux';
import AppContainers from '../../utils/appStyles/AppContainers';
import {AppColors} from '../../utils/appStyles/AppColors';
import Button from '../elements/Button';
import {actionAuthUser} from '../../store/actions/authActions';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const authStore = useAppSelector(state => state.auth);
  const {user} = authStore;

  const logout = () => {
    dispatch(actionAuthUser({}, false));
  };

  return (
    <View style={[AppContainers.mainContainer, styles.screen]}>
      <Image
        source={
          user?.image
            ? {uri: user.image}
            : require(`../../images/not_photo.png`)
        }
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.rowKey}>Имя: </Text>
          <Text style={styles.rowValue}>{user?.firstName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowKey}>Ник: </Text>
          <Text style={styles.rowValue}>{user?.username}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowKey}>Email: </Text>
          <Text style={styles.rowValue}>{user?.email}</Text>
        </View>
      </View>

      <Button text="Выйти" onPressHandler={logout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: AppColors.lightBlue,
    marginBottom: 30,
  },
  rowKey: {
    fontSize: 18,
  },
  rowValue: {
    fontSize: 18,
  },
  content: {
    marginBottom: 20,
    width: '100%',
  },
});
