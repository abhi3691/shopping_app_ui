import {StyleSheet, Text, View} from 'react-native';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 3,
    width: ScreenRatio.width,
  },
  imageStyle: {
    height: ScreenRatio.height / 3,
    width: ScreenRatio.width,
  },
});

export default styles;
