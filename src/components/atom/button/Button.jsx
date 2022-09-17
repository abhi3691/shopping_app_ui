import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './ButtonStyles';

const Button = ({value, changeValue, height, width}) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={[
        styles.container,
        {height: height, width: width, borderRadius: width / 50},
      ]}
      onPress={() => changeValue()}>
      <Text style={styles.text}>{value}</Text>
    </TouchableHighlight>
  );
};

export default Button;
