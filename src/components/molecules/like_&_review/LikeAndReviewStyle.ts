import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  ratingContainer: {
    width: ScreenRatio.width / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ratingCount: {
    color: customColor.blue,
    fontSize: FontRatio(10),
  },
});

export default styles;
