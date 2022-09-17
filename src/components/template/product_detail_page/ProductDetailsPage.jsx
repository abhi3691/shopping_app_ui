import {View, Text} from 'react-native';
import React from 'react';
import styles from './ProductDetailsPageStyle';
import SearchHeader from '../../organization/search_header/SearchHeader';

const ProductDetailsPage = () => {
  //sate declaration
  const [value, setValue] = React.useState();

  //change value function
  const changeValue = x => {
    setValue(x);
  };

  //product list UI
  return (
    <View style={styles.container}>
      <SearchHeader value={value} onChangeText={x => changeValue(x)} />
    </View>
  );
};

export default ProductDetailsPage;
