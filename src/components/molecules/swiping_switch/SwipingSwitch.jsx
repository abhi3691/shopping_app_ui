import { View, Text } from 'react-native'
import React from 'react'
import SwitchSelector from "react-native-switch-selector";
import customColor from '../../../theme/Color';
import styles from './SwipingSwitchStyle';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
const SwipingSwitch = ({ options }) => {
    return (
        <View style={styles.container}>

            {/* //swipe Switch */}

            <SwitchSelector
                textColor={customColor.black}
                selectedColor={customColor.white}
                buttonColor={customColor.blue}
                options={options}
                initial={0}
                borderRadius={ScreenRatio.width/50}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
            />
        </View>
    )
}

export default SwipingSwitch