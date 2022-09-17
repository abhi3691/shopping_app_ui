import {View, Text} from 'react-native';
import React from 'react';
import styles from './BadgeStyle';

const Badge = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{count}</Text>
    </View>
  );
};

export default Badge;
