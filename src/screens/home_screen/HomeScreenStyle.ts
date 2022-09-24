import {StyleSheet} from 'react-native';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import Styles from '../../global_styles/styles';
import customColor from '../../theme/Color';
const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    backgroundColor: customColor.white,
  },
});

export default styles;
