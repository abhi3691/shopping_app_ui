import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './HomeScreenStyle';
import HomeHeader from '../../components/organization/home_header/HomeHeader';
import RequestList from '../../components/template/reqest_list/RequestList';
import customColor from '../../theme/Color';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={customColor.blue}
      />
      {/* //header */}
      <HomeHeader name={'john'} />

      {/* //request list */}
      <RequestList />
    </View>
  );
};

export default HomeScreen;
