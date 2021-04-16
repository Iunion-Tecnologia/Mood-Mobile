import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();

// Screens

import Presentation from '../screens/Presentation';
import Registration from '../screens/Registration';
import Login from '../screens/Login';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';

const AuthRoutes: React.FC  = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Presentation"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
)

export default AuthRoutes
