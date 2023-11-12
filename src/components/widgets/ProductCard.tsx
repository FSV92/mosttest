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
import AppStyles from '../../utils/appStyles/AppStyles';
import FilledButton from '../elements/FilledButton';
import Quantity from './Quantity';

type PropTypes = {
  product: {id: number; thumbnail: string; title: string; price: string};
  wrapStyle: StyleProp<ViewStyle> | null;
};

const ProductCard: React.FC<PropTypes> = props => {
  const {product, wrapStyle} = props;
  const navigation = useNavigation<MainStackNavigatorTypeListProp>();

  const addToCart = () => {};

  const navigateToDetail = () => {
    navigation.navigate('ProductDetailScreen', {id: product.id});
  };

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
          <Quantity />
          <FilledButton text="Добавить в корзину" onPressHandler={addToCart} />
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
