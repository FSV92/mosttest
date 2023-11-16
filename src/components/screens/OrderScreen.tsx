import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useAppSelector} from '../../store/hooks/redux';
import AppContainers from '../../utils/appStyles/AppContainers';
import ModalComponent from '../widgets/ModalComponent';
import FilledButton from '../elements/FilledButton';

type OrderTypes = {
  title: string;
};

const OrderScreen: React.FC = () => {
  const cartStore = useAppSelector(state => state.cart);
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={[styles.screen, AppContainers.mainContainer]}>
      <Text style={styles.text}>Итого {cartStore.totalPrice} ₽</Text>

      <FilledButton
        text="Купить"
        onPressHandler={() => setVisibleModal(true)}
        textStyle={{fontSize: 14}}
        wrapStyle={{paddingVertical: 5, alignItems: 'center'}}
      />

      <ModalComponent isVisible={visibleModal} setVisible={setVisibleModal}>
        <View style={styles.children}>
          <TouchableOpacity
            onPress={() => setVisibleModal(false)}
            style={styles.childrenClose}>
            <Text>Закрыть</Text>
          </TouchableOpacity>
          <Text>Заказ принят</Text>
        </View>
      </ModalComponent>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  screen: {flexGrow: 1, backgroundColor: 'white'},
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  children: {
    // flex: 1,

    // width: '100%',
    height: 300,
    backgroundColor: 'white',
    bottom: 0,
    right: 0,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  childrenClose: {position: 'absolute', right: 20, top: 20},
});
