import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './SingleRequestStyle';
import Button from '../../atom/button/Button';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SingleRequest = ({productName, DateOfPurchase, productImage}) => {
  const navigation = useNavigation();
  const gotoScreen = () => {
    const data = {productName, productImage, DateOfPurchase};
    navigation.navigate('ProductDetailsPage', {data: data});
  };
  return (
    <View
      style={styles.container}
      underlayColor="transparent"
      onPress={() => gotoScreen()}>
      <>
        <View style={styles.topContainer}>
          <Image
            source={{uri: productImage}}
            resizeMode="center"
            style={styles.imageStye}
          />
          <View style={styles.infoContainer}>
            <Text numberOfLines={2} style={styles.nameText}>
              {productName}
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateTitle}>Date of Purchase</Text>
              <Text style={styles.date}>{DateOfPurchase}</Text>
            </View>
          </View>
        </View>
        <Button
          value={'request'}
          changeValue={() => gotoScreen()}
          height={ScreenRatio.height / 25}
          width={ScreenRatio.width / 1.2}
        />
      </>
    </View>
  );
};

export default SingleRequest;
