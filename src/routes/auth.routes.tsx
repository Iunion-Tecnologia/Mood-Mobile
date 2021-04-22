import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
=======
import Toast from 'react-native-toast-message';
>>>>>>> release/v1.3.1
const Stack = createStackNavigator();

// Screens

import Presentation from '../screens/Presentation';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';

const AuthRoutes: React.FC  = () => (
  <>
<<<<<<< HEAD
    <StatusBar backgroundColor="#FFF" style="dark" />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
=======
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Presentation"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
>>>>>>> release/v1.3.1
    </NavigationContainer>
  </>
)

export default AuthRoutes
