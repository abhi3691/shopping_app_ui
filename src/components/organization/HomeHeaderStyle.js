import {StyleSheet} from 'react-native';
import FontRatio from '../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 5,
    width: ScreenRatio.width,
    backgroundColor: customColor.blue,
    padding: 20,
    borderBottomEndRadius: ScreenRatio.width / 30,
    borderBottomStartRadius: ScreenRatio.width / 30,
  },
  nameStyle: {
    fontSize: FontRatio(20),
    color: customColor.white,
  },
  greeting: {
    fontSize: FontRatio(12),
    color: customColor.gray,
    opacity: 0.5,
    marginTop: ScreenRatio.height / 150,
  },
});

export default styles;
