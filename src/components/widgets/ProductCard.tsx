import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {MainStackNavigatorTypeListProp} from '../navigator/_navigatorTypes';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import AppStyles from '../../utils/appStyles/AppStyles';
import FilledButton from '../elements/FilledButton';
import BlankButton from '../elements/BlankButton';
import * as api from '../../utils/functions';
import {ICurrentProduct} from '../../store/_types';
import Trash from '../../images/svg/Trash.svg';
import Quantity from './Quantity';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropTypes = {
  product: ICurrentProduct;
  wrapStyle: StyleProp<ViewStyle> | null;
  screen?: string;
};

const addToArray = (array: ICurrentProduct[], product: ICurrentProduct) => {
  array.push(product);

  return array;
};

const removeProductArray = (
  array: ICurrentProduct[],
  id: number | string | null,
) => {
  const newArray = array.filter(el => el.id != id);

  return newArray;
};

const ProductCard: React.FC<PropTypes> = props => {
  const {product, wrapStyle, screen} = props;
  const navigation = useNavigation<MainStackNavigatorTypeListProp>();

  const dispatch = useAppDispatch();
  const cartStore = useAppSelector(state => state.cart);
  const authStore = useAppSelector(state => state.auth);

  const addToCart = () => {
    const newArray = addToArray(cartStore.products, product);

    dispatch(api.updateCart(authStore.user.id, newArray));
  };

  const removeFromCart = () => {
    const newArray = removeProductArray(cartStore.products, product.id);

    dispatch(api.updateCart(authStore.user.id, newArray));
  };

  const navigateToDetail = () => {
    // console.log('product', product);

    navigation.navigate('ProductDetailScreen', {currentProduct: product});
  };

  // console.log('product.inCart', product.inCart);

  return (
    <TouchableOpacity
      onPress={navigateToDetail}
      style={[AppStyles.shadowWrap, styles.wrap, wrapStyle]}>
      <Image
        source={
          product?.thumbnail
            ? {uri: product?.thumbnail}
            : require(`../../images/not_photo_prod.jpg`)
        }
        style={styles.image}
      />

      <View style={styles.productRight}>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.title}</Text>

          <View style={styles.productPrice}>
            <Text style={styles.productPriceText}>{product.price} ₽</Text>
          </View>
        </View>

        <View style={styles.productBottomBar}>
          <Quantity
            quantity={product.quantity}
            type="card"
            productID={product.id}
          />
          {screen == 'cart' ? (
            <BlankButton
              text="Удалить из корзины"
              onPressHandler={removeFromCart}
              textStyle={{fontSize: 12, fontWeight: 'normal'}}
              wrapStyle={{
                paddingVertical: 5,
                flex: 1,
                alignItems: 'center',
                marginLeft: 10,
              }}
            />
          ) : !product.inCart ? (
            <FilledButton
              text="Добавить в корзину"
              onPressHandler={addToCart}
            />
          ) : (
            <Text>Товар в корзине</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {width: 80, height: 80, marginRight: 20},
  wrap: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  productRight: {
    flex: 1,
  },
  productInfo: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 20,
    marginRight: 10,
  },
  productPrice: {
    flexDirection: 'row',
  },
  productPriceText: {
    fontSize: 16,
    fontWeight: '700',
  },
  productBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
