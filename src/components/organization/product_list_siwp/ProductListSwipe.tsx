import {View, Image} from 'react-native';
import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import products from './Products';
import ImagePreviewSingle from '../../molecules/image_preview_single/ImagePreviewSingle';
import styles from './ProductListSwipeStyle';
import customColor from '../../../theme/Color';

interface PropdectListSwipProps {
  item:{
    image:string
  }
}


const ProductListSwipe:React.FC<PropdectListSwipProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        autoplayLoop
        showPagination
        paginationDefaultColor={customColor.white}
        paginationActiveColor={customColor.gray}
        paginationStyleItemInactive={styles.inActive}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ImagePreviewSingle item={item} />}
        style={styles.container}
      />
    </View>
  );
};

export default ProductListSwipe;
