import {View, Text} from 'react-native';
import React from 'react';
import styles from './BadgeStyle';
type BadgeProps ={
  count:number
}
const Badge :React.FC<BadgeProps> = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{count}</Text>
    </View>
  );
};

export default Badge;
