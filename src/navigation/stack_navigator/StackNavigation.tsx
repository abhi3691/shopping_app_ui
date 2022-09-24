import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetailsPage from '../../components/template/product_detail_page/ProductDetailsPage';
import HomeScreen from '../../screens/home_screen/HomeScreen';
import TabNavigation from '../tab_navigator/TabNavigation';
const StackNavigation = () => {
  //set hook
  const Stack = createStackNavigator();

  //stack navigation container
  return (
    <Stack.Navigator screenOptions={{headerShown: false,
    presentation:'modal'
    }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="ProductDetailsPage" component={ProductDetailsPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
