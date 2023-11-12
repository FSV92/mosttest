import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import AppContainers from '../../utils/appStyles/AppContainers';
import * as api from '../../utils/functions';

import ProductCard from '../widgets/ProductCard';
import Categories from '../widgets/Categories';

const MainScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const productsStore = useAppSelector(state => state.products);

  const [reachedEnd, setReachedEnd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [onEndReachedCalledDuringMomentum, setDuring] = useState(true);

  useEffect(() => {
    dispatch(api.getProducts());
    dispatch(api.getCategories());
  }, []);

  const loadMore = () => {
    console.log('loadmore', loading);

    if (!onEndReachedCalledDuringMomentum) {
      dispatch(api.getProducts());
      setDuring(true);
      // onEndReachedCalledDuringMomentum = true;
    }
  };

  const renderFooter = () => {
    return (
      <View>
        {
          // loading &&
          <Text>Загрузка...</Text>
        }
      </View>
    );
  };

  return (
    <>
      <View>
        <Categories categories={productsStore.categories} />
      </View>

      {productsStore.products.length > 0 && (
        <FlatList
          data={productsStore.products}
          keyExtractor={item => item.id}
          contentContainerStyle={[AppContainers.mainContainer, styles.list]}
          style={[styles.listStyle]}
          scrollEventThrottle={24}
          ListFooterComponent={renderFooter}
          // onEndReached={loadMore}
          // onEndReachedThreshold={1}
          // onMomentumScrollBegin={() => {
          //   console.log('onMomentumScrollBegin');
          //   loadMore();
          //   // onEndReachedCalledDuringMomentum = false;
          //   setDuring(false);
          // }}
          renderItem={({item}) => {
            return (
              <ProductCard product={item} wrapStyle={{marginBottom: 10}} />
            );
          }}
        />
      )}
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {flexGrow: 1, backgroundColor: 'white'},
  listStyle: {
    height: '100%',
  },
  list: {
    paddingVertical: 10,
    flexGrow: 1,
  },
});
