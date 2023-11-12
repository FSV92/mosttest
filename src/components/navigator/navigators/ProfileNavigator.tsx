import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackNavigatorTypeList} from '../_navigatorTypes';

// экраны
import ProfileScreen from '../../screens/ProfileScreen';

const ProfileStack =
  createNativeStackNavigator<ProfileStackNavigatorTypeList>();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{title: 'Профиль'}}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
