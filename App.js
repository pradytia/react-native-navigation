import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import LoginPages from './src/screen/Login';
import Register from './src/screen/Register';



const Stack = createNativeStackNavigator();

export default function app(){

  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="Login" component={LoginPages}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
