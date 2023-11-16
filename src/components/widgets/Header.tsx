import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useAppSelector, useAppDispatch} from '../../store/hooks/redux';
import {MainStackNavigatorTypeListProp} from '../navigator/_navigatorTypes';
import {useNavigation} from '@react-navigation/native';
import AppContainers from '../../utils/appStyles/AppContainers';

import Search from '../../images/svg/search.svg';
import Cart from '../../images/svg/cart.svg';

type PropTypes = {
  title: string;
};

const Header: React.FC<PropTypes> = props => {
  const {title} = props;
  const navigation = useNavigation<MainStackNavigatorTypeListProp>();
  const cartStore = useAppSelector(state => state.cart);
  const {totalProducts} = cartStore;

  const navigateToCart = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <View style={[AppContainers.mainContainer, styles.container]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.btns}>
        <TouchableOpacity style={styles.search}>
          <Search width={35} height={35} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToCart}>
          <Cart width={35} height={35} color="#000" />
          <View style={styles.count}>
            <Text style={styles.countText}>{String(totalProducts)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btns: {
    marginLeft: 'auto',
    flexDirection: 'row',
    marginRight: 20,
  },
  search: {
    marginRight: 10,
  },
  count: {
    position: 'absolute',
    right: -10,
    top: 0,
    borderRadius: 50,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 15,
  },
});
