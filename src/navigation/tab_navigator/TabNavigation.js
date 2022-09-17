import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/home_screen/HomeScreen';
import CartScreen from '../../screens/cart_screen/CartScreen';
import NotificationScreen from '../../screens/notification_screen/NotificationScreen';
import ProfileScreen from '../../screens/profile_screen/ProfileScreen';
import styles from './TabBarStyles';
import TabBarIcon from '../../components/molecules/tabbar_icons/TabBarIcon';
import customColor from '../../theme/Color';
import Badge from '../../components/atom/badge/Badge';
import StackNavigation from '../stack_navigator/StackNavigation';
const TabNavigation = () => {
  //set hook
  const Tab = createMaterialTopTabNavigator();

  //tab navigation container
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarScrollEnabled: true,
        swipeEnabled: true,
        tabBarIndicatorStyle: {
          opacity: 0,
        },
        tabBarPressColor: 'transparent',
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.tabBarItemContainer,
        tabBarIconStyle: styles.tabBarIconStyle,
      }}
      tabBarPosition="bottom"
      initialRouteName="StackNavigation">
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                iconName={focused ? 'home-filled' : 'home'}
                color={focused ? customColor.black : customColor.gray}
                label="Home"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarBadge: () => {
            return <Badge count={2} />;
          },

          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                iconName={focused ? 'notifications-filled' : 'notifications'}
                color={focused ? customColor.black : customColor.gray}
                label="Notification"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                iconName={focused ? 'cart-filled' : 'cart'}
                color={focused ? customColor.black : customColor.gray}
                label="Cart"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                iconName={focused ? 'person-filled' : 'person'}
                color={focused ? customColor.black : customColor.gray}
                label="Profile"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
