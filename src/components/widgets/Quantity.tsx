import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
// import * as api from '../../utils/functions';
import {
  actionSetQuantityCurrent,
  actionSetQuantityCard,
  actionIncrement,
  actionDecrement,
} from '../../store/actions/productsActions';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropTypes = {
  quantity: number | string;
  type?: string;
  productID: number | string | null;
};

const Quantity: React.FC<PropTypes> = props => {
  const {quantity, type, productID} = props;
  const [value, setValue] = useState<number | string>(1);

  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(actionIncrement(quantity, productID));
  };
  const decrement = () => {
    dispatch(actionDecrement(quantity, productID));
  };

  const setQuantity = (quantity: number | string) => {
    type == 'card' && dispatch(actionSetQuantityCard(quantity, productID));
    type == 'current' && dispatch(actionSetQuantityCurrent(quantity));
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={decrement} style={styles.btn}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={
          String(quantity)
          // || String(value)
        }
        onChange={value => {
          setQuantity(value.nativeEvent.text);
        }}
      />

      <TouchableOpacity onPress={increment} style={styles.btn}>
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
