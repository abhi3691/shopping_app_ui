import { StyleSheet } from 'react-native'
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio'
import customColor from '../../theme/Color'

const styles = StyleSheet.create({
    container: {
        height: ScreenRatio.height / 14,
        width: ScreenRatio.width / 1.1,
        position: 'absolute',
        bottom: 20,
        right: 20,
        left:20,
        borderRadius: 10,
        elevation:3,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: customColor.white
    },
    tabBarItemContainer: {
        height: ScreenRatio.height / 14,
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