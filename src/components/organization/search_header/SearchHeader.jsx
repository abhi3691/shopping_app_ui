import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './SearchHeaderStyle';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import customColor from '../../../theme/Color';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import {useNavigation} from '@react-navigation/native';
const SearchHeader = ({value, onChangeText}) => {
  //hook
  const navigation = useNavigation();

  //go back function
  const goBackScreen = () => {
    navigation.goBack();
  };

  //search Ui
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="transparent"
        style={styles.backContainer}
        onPress={() => goBackScreen()}>
        <Icons
          name="md-chevron-back-outline"
          color={customColor.gray}
          size={FontRatio(25)}
        />
      </TouchableHighlight>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          value={value}
          placeholderTextColor={customColor.gray}
          onChangeText={() => onChangeText()}
          style={styles.input}
          numberOfLines={1}
        />
        <TouchableHighlight
          style={styles.iconContainer}
          underlayColor="transparent">
          <Icons name="search" color={customColor.gray} size={FontRatio(25)} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SearchHeader;
