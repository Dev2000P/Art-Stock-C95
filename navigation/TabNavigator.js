import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllProducts from "../screens/AllProducts";
import NewProduct from "../screens/NewProduct";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'AllProducts') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'NewProduct') {
              iconName = focused ? 'arrow-up-circle' : 'arrow-up-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="All Products" component={AllProducts} options={{headerShown:false}}/>
        <Tab.Screen name="New Product" component={NewProduct} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;