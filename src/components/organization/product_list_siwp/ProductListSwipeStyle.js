import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 3,
    width: ScreenRatio.width,
  },
  inActive: {
    borderColor: customColor.gray,
    borderWidth: 1,
  },
});

export default styles;
