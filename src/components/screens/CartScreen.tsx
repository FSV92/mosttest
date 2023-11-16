import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MainStackNavigatorTypeListProp} from '../navigator/_navigatorTypes';
import ProductCard from '../widgets/ProductCard';
import AppContainers from '../../utils/appStyles/AppContainers';
import {ICurrentProduct} from '../../store/_types';
import {useAppSelector, useAppDispatch} from '../../store/hooks/redux';
import * as api from '../../utils/functions';
import BlankButton from '../elements/BlankButton';
import FilledButton from '../elements/FilledButton';

const CartScreen: React.FC = () => {
  const navigation = useNavigation<MainStackNavigatorTypeListProp>();

  const dispatch = useAppDispatch();
  const cartStore = useAppSelector(state => state.cart);
  const authStore = useAppSelector(state => state.auth);
  const {products} = cartStore;

  // console.log('cart', cartStore);

  const removeAll = () => {
    const newArray: [] = [];
    dispatch(api.updateCart(authStore.user.id, newArray, 'del'));
  };

  const navigateToOrder = () => {
    navigation.navigate('OrderScreen');
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        contentContainerStyle={[AppContainers.mainContainer, styles.list]}
        keyExtractor={(item: ICurrentProduct) => String(item.id)}
        style={[styles.listStyle]}
        scrollEventThrottle={24}
        renderItem={({item}) => {
          return (
            <ProductCard
              product={item}
              wrapStyle={{marginBottom: 10}}
              screen="cart"
            />
          );
        }}
      />

      <View style={[AppContainers.mainContainer, styles.bottomBar]}>
        <BlankButton
          text="Удалить все"
          onPressHandler={removeAll}
          textStyle={{fontSize: 14}}
          wrapStyle={{
            paddingVertical: 5,
            flex: 1,
            alignItems: 'center',
            marginRight: 20,
          }}
        />
        <FilledButton
          text="Купить"
          onPressHandler={navigateToOrder}
          textStyle={{fontSize: 14}}
          wrapStyle={{paddingVertical: 5, flex: 1, alignItems: 'center'}}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {flexGrow: 1, backgroundColor: 'white'},
  listStyle: {
    height: '100%',
  },
  list: {
    paddingVertical: 10,
    paddingBottom: 50,
    flexGrow: 1,
  },
  bottomBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    // heigth: 50,
    paddingVertical: 10,
  },
});
