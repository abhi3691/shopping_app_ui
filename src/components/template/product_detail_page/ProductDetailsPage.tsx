import {View, Text} from 'react-native';
import React from 'react';
import styles from './ProductDetailsPageStyle';
import SearchHeader from '../../organization/search_header/SearchHeader';
import LikeAndReview from '../../molecules/like_&_review/LikeAndReview';
import ProductList from '../product_list/ProductList';

const ProductDetailsPage = (props:any) => {
  //sate declaration
  const [value, setValue] = React.useState<string>();

  //set prams  data variable
  const data = props.route.params.data;

  //change value function
  const changeValue = (x:string) => {
    setValue(x);
  };

  //product list UI
  return (
    <View style={styles.container}>
      {/* //searchHeader */}
      <SearchHeader value={value!} onChangeText={x => changeValue(x)} />

      {/* //like and review */}
      <LikeAndReview />

      {/* //product list */}
      <ProductList data={data} />
    </View>
  );
};

export default ProductDetailsPage;
