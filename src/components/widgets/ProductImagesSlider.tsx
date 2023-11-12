import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Animated,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {AppColors} from '../../utils/appStyles/AppColors';

type PropTypes = {
  images: string[];
  wrapStyle: StyleProp<ViewStyle> | null;
};

const ProductImagesSlider: React.FC<PropTypes> = props => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const {images, wrapStyle} = props;

  const renderItem = ({item}: {item: string}) => {
    return <Image style={styles.image} source={{uri: item}} />;
  };

  return (
    <View style={[styles.container, wrapStyle]}>
      <FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item}
        pagingEnabled
        horizontal
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      />

      {images.length > 1 && (
        <ExpandingDot
          data={images}
          expandingDotWidth={5}
          scrollX={scrollX}
          inActiveDotOpacity={0.3}
          dotStyle={{
            width: 5,
            height: 5,
            backgroundColor: AppColors.lightBlue,
            borderRadius: 50,
          }}
          containerStyle={{
            bottom: 0,
          }}
        />
      )}
    </View>
  );
};

export default ProductImagesSlider;

const styles = StyleSheet.create({
  container: {height: 320, alignItems: 'center', justifyContent: 'center'},
  list: {},
  image: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'contain',
  },
});
