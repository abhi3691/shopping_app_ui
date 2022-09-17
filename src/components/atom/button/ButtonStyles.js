import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import customColor from '../../../theme/Color'

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 25,
    width: ScreenRatio.width / 1.2,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: customColor.blue,
    borderRadius:ScreenRatio.width/80
  },
  text: {
    color: customColor.white,
    fontSize:FontRatio(12)
  }
})

export default styles