import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackNavigatorTypeList} from '../_navigatorTypes';

// экраны
import ProfileScreen from '../../screens/ProfileScreen';

const ProfileStack =
  createNativeStackNavigator<ProfileStackNavigatorTypeList>();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
