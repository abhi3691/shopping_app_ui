import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import customColor from '../../../theme/Color';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 8,
    width: ScreenRatio.width,
    backgroundColor: customColor.blue,
    borderBottomStartRadius: ScreenRatio.width / 25,
    borderBottomEndRadius: ScreenRatio.width / 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backContainer: {
    marginRight: 5,
  },
  inputContainer: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: customColor.white,
    borderRadius: ScreenRatio.width / 50,
  },
  input: {
    fontSize: FontRatio(12),
    color: customColor.gray,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: ScreenRatio.width / 1.4,
  },
  iconContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
