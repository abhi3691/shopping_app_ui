import { StyleSheet } from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import customColor from '../../../theme/Color'

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 6.2,
    width: ScreenRatio.width / 1.12,
    justifyContent: 'space-between',
    padding: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: customColor.gray,
    borderRadius: ScreenRatio.width / 50,
  },
  topContainer: {
    height: ScreenRatio.height / 12,
    width: ScreenRatio.width / 1.15,
    flexDirection: 'row',
    alignItems: 'center',

  },
  imageStye: {
    height: ScreenRatio.height / 11,
    width: ScreenRatio.height / 11
  },
  infoContainer: {
    height: ScreenRatio.height / 12,
    width: ScreenRatio.width / 1.5,
    justifyContent: 'space-evenly',
    marginLeft: 10
  },
  nameText: {
    fontSize: FontRatio(13),
    color: customColor.black,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems:'center'
  },
  dateTitle: {
    fontSize: FontRatio(10),
    color: customColor.gray,
  },
  date: {
    fontSize: FontRatio(10),
    color: customColor.black,
    marginLeft:10,
  }
})

export default styles