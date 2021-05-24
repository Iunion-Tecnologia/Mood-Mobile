import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
const Stack = createStackNavigator();

// Screens

import Intro from '../screens/Intro';
import Presentation from '../screens/Presentation';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';

const AuthRoutes: React.FC = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#6C0FD9' },
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  </>
);

export default AuthRoutes;
