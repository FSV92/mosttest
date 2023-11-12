import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import {AppColors} from '../../utils/appStyles/AppColors';

const Quantity = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value.toString()}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: AppColors.lightgrey,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: AppColors.lightgrey,
    borderRadius: 3,
    marginHorizontal: 10,
    height: 20,
    width: 20,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    paddingVertical: 3,
  },
});
