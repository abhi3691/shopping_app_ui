import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from '../tab_navigator/TabNavigation'
const StackNavigation = () => {
    
    //set hook
    const Stack = createStackNavigator()

    //stack navigation container
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='tab'
                component={TabNavigation}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation