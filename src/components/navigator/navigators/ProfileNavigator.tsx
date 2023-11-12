import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackNavigatorTypeList} from '../_navigatorTypes';

// экраны
import ProfileScreen from '../../screens/ProfileScreen';

import Header from '../../widgets/Header';
import {getHeaderTitle} from '@react-navigation/elements';

const ProfileStack =
  createNativeStackNavigator<ProfileStackNavigatorTypeList>();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator
    screenOptions={{
      header: ({navigation, route, options}) => {
        const title = getHeaderTitle(options, route.name);

        return <Header title={title} />;
      },
    }}>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{title: 'Профиль'}}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
