import {View, Text} from 'react-native';
import React from 'react';
import styles from '../HomeHeaderStyle';
import SwipingSwitch from '../../molecules/swiping_switch/SwipingSwitch';

const HomeHeader = ({name}) => {
  //switch Options
  const options = [
    {label: 'Purchases', value: 'Purchases'},
    {label: 'Services', value: 'Services'},
  ];

  return (
    <View style={styles.container}>
      {/* //name */}
      <Text style={styles.nameStyle}>{`Hi, ${name}`}</Text>

      {/* //WelcomeText */}
      <Text style={styles.greeting}>Welcome to</Text>

      {/* //swipe switch */}
      <SwipingSwitch options={options} />
    </View>
  );
};

export default HomeHeader;
