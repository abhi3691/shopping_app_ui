import {View, Image} from 'react-native';
import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import products from './Products';
import ImagePreviewSingle from '../../molecules/image_preview_single/ImagePreviewSingle';
import styles from './ProductListSwipeStyle';

const ProductListSwipe = () => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={5}
      autoplayLoop
      showPagination
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ImagePreviewSingle item={item} />}
      style={styles.container}
    />
  );
};

export default ProductListSwipe;
