import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import AppContainers from '../../utils/appStyles/AppContainers';

import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import {useNavigation} from '@react-navigation/native';
import * as api from '../../utils/functions';
import {IRoutes} from '../navigator/_navigatorTypes';
import ProductImagesSlider from '../widgets/ProductImagesSlider';
import Quantity from '../widgets/Quantity';
import FilledButton from '../elements/FilledButton';
import {ICurrentProduct} from '../../store/_types';

const ProductDetailScreen: React.FC<IRoutes> = ({route}) => {
  const navigation = useNavigation();
  const id = route?.params?.id && route.params.id;
  const dispatch = useAppDispatch();
  const productsStore = useAppSelector(state => state.products);
  const cartStore = useAppSelector(state => state.cart);
  const authStore = useAppSelector(state => state.auth);
  const {currentProduct} = productsStore;

  useEffect(() => {
    dispatch(api.getCurrentProduct(id));
  }, []);

  const addToArray = (array: ICurrentProduct[], product: ICurrentProduct) => {
    array.push(product);

    return array;
  };

  const addToCart = () => {
    const newArray = addToArray(cartStore.products, currentProduct);

    dispatch(api.updateCart(authStore.user.id, newArray));
  };

  // console.log('currentProduct.quantity', currentProduct);

  return (
    <View style={[styles.screen]}>
      <ProductImagesSlider
        images={currentProduct.images}
        wrapStyle={{marginBottom: 20}}
      />

      <View style={AppContainers.mainContainer}>
        <Text style={styles.productTitle}>{currentProduct.title}</Text>

        <Text style={styles.productDescription}>
          {currentProduct.description}
        </Text>

        <View style={styles.productPrice}>
          <Text style={styles.productPriceText}>{currentProduct.price} ₽</Text>
        </View>

        <View style={styles.productBottomBar}>
          <Quantity
            quantity={currentProduct.quantity}
            type="current"
            productID={currentProduct.id}
          />
          <FilledButton text="Добавить в корзину" onPressHandler={addToCart} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  wrap: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    marginBottom: 20,
    marginRight: 10,
  },
  productPrice: {
    flexDirection: 'row',
  },
  productPriceText: {
    fontSize: 20,
    fontWeight: '700',
  },
  productBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
