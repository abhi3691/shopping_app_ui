import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        margin: 20,
        marginBottom:50,
    },
    footer: {
        height:ScreenRatio.height/3
    }
})

export default styles;