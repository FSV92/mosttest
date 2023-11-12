import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropsTypes = {
  text: string;
  onPressHandler: () => void;
};

const FilledButton: React.FC<PropsTypes> = props => {
  const {text, onPressHandler} = props;

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.btnWrap}>
      <Text style={styles.btntext}>{text}</Text>
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
