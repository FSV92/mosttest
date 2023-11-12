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
} from '../../store/actions/productsActions';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropTypes = {
  quantity?: number | string;
  type?: string;
  productID: number | string | null;
};

const Quantity: React.FC<PropTypes> = props => {
  const {quantity, type, productID} = props;
  const [value, setValue] = useState<number | string>(1);

  const dispatch = useAppDispatch();

  const increment = () => {};
  const decrement = () => {
    // if (quantity > 0) {
    // }
  };
  const setQuantity = (value: number | string) => {
    // dispatch(api.updateCart(authStore.user.id, newArray));

    console.log('productID', productID);

    type == 'card' && dispatch(actionSetQuantityCard(value, productID));
    type == 'current' && dispatch(actionSetQuantityCurrent(value));
  };
  // console.log('quantity', quantity);

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
