import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import customColor from '../../../theme/Color'

const styles = StyleSheet.create({
    container: {
        height: ScreenRatio.width / 25,
        width: ScreenRatio.width / 25,
        backgroundColor: customColor.red,
        zIndex: 1,
        borderRadius: ScreenRatio.width / 25,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        top:2
    },
    label: {
        fontSize: FontRatio(8),
        color:customColor.white
    }
})
export default styles