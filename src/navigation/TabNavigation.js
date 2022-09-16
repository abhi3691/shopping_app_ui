import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/home_screen/HomeScreen'
import CartScreen from '../screens/cart_screen/CartScreen'
import NotificationScreen from '../screens/notification_screen/NotificationScreen'
import ProfileScreen from '../screens/profile_screen/ProfileScreen'
const TabNavigation = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
            />
            <Tab.Screen
                name='CartScreen'
                component={CartScreen}
            />
            <Tab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation