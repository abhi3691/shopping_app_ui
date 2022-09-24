import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 16,
    width: ScreenRatio.width / 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    borderRadius: ScreenRatio.width / 50,
    marginVertical: ScreenRatio.height / 40,
    backgroundColor: customColor.white,
  },
});

export default styles;
