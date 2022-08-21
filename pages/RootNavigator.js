import * as React from 'react';

import { Avatar } from "@rneui/base";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';

//const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    // <NavigationContainer>
    //   {/* <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailScreen} />
    //   </Stack.Navigator> */}
      
    // </NavigationContainer>
    <>
     <Avatar
     activeOpacity={0.2}
     avatarStyle={{}}
     containerStyle={{ backgroundColor: "#BDBDBD" }}
     icon={{}}
     iconStyle={{}}
     imageProps={{}}
     onLongPress={() => alert("onLongPress")}
     onPress={() => alert("onPress")}
     overlayContainerStyle={{}}
     placeholderStyle={{}}
     rounded
     size="large"
     source={{ uri: "" }}
     title="Z"
     titleStyle={{}}
   />
   </>
  );
};
   
  
export default RootNavigator;