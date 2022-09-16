import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from './TabNavigation'
const StackNavigation = () => {
    const Stack = createStackNavigator()
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