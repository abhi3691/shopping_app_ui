import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import customColor from '../../../theme/Color';
import styles from './LikeAndReviewStyle';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import {Rating} from 'react-native-ratings';

const LikeAndReview = ({}) => {
  const [like, setLike] = React.useState(false);
  return (
    <View style={styles.container}>
      <Icons
        name={like ? 'heart' : 'heart-outline'}
        color={like ? customColor.red : customColor.gray}
        size={FontRatio(20)}
      />

      <View style={styles.ratingContainer}>
        <Rating type="star" ratingCount={5} imageSize={18} />
        <Text style={styles.ratingCount}>50 Ratings</Text>
      </View>
    </View>
  );
};

export default LikeAndReview;
