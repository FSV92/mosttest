import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {AppColors} from '../../utils/appStyles/AppColors';
import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import * as api from '../../utils/functions';

type PropTypes = {
  categories: string[];
};

const Categories: React.FC<PropTypes> = props => {
  const {categories} = props;
  const dispatch = useAppDispatch();
  const productsStore = useAppSelector(state => state.products);

  const getProdOfCategory = (category: string) => {
    dispatch(api.getProductsOfCategory(category));
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            onPress={() => getProdOfCategory(cat)}
            key={cat}
            style={[
              styles.cat,
              {marginRight: 15, marginLeft: index == 0 ? 15 : 0},
            ]}>
            <Text style={styles.catText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  cat: {
    padding: 10,
    borderWidth: 1,
    borderColor: AppColors.lightBlue,
    borderRadius: 9,
  },
  catText: {
    color: AppColors.lightBlue,
    fontSize: 16,
  },
});
