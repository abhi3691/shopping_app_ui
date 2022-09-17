import {View, Image} from 'react-native';
import React from 'react';
import styles from './ImagePreviewSingleStyle';

const ImagePreviewSingle = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={styles.imageStyle}
        resizeMode="center"
      />
    </View>
  );
};

export default ImagePreviewSingle;
