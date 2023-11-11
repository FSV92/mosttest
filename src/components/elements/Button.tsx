import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropsTypes = {
  text: string;
  onPressHandler: () => void;
};

const Button: React.FC<PropsTypes> = props => {
  const {text, onPressHandler} = props;

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.btnWrap}>
      <Text style={styles.btntext}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnWrap: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: AppColors.orange,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btntext: {
    color: AppColors.orange,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
