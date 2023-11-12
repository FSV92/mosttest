import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropsTypes = {
  text: string;
  onPressHandler: () => void;
  textStyle?: StyleProp<TextStyle> | null;
  wrapStyle?: StyleProp<ViewStyle> | null;
};

const FilledButton: React.FC<PropsTypes> = props => {
  const {text, onPressHandler, textStyle, wrapStyle} = props;

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[styles.btnWrap, wrapStyle]}>
      <Text style={[styles.btntext, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  btnWrap: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: AppColors.orange,
    backgroundColor: AppColors.orange,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  btntext: {
    color: 'white',
    fontSize: 14,
  },
});
