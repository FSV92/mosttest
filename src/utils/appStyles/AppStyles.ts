import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  shadowWrap: {
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#171717',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5, // нужно для Android
  },
});
