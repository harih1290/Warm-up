import * as React from 'react';

import { Avatar } from "@rneui/base";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';

//const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>      
    </NavigationContainer>
    
  );
};
   
  
export default RootNavigator;