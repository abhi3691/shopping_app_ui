import { StyleSheet } from 'react-native'
import ScreenRatio from '../global_functions/screen_ratio/ScreenRatio'
import customColor from '../theme/Color'

const styles = StyleSheet.create({
    container: {
        height: ScreenRatio.height / 12,
        width: ScreenRatio.width / 1.1,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: customColor.white
    },
    tabBarItemContainer: {
        height: ScreenRatio.height / 12,
        width: ScreenRatio.width / 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarIconStyle: {
        width: ScreenRatio.width / 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles