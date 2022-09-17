import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetailsPage from '../../components/template/product_detail_page/ProductDetailsPage';
import HomeScreen from '../../screens/home_screen/HomeScreen';
const StackNavigation = () => {
  //set hook
  const Stack = createStackNavigator();

  //stack navigation container
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetailsPage" component={ProductDetailsPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
