import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons, FontAwesome, Feather, Octicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Screens

import HomeScreen from '../screens/Home';
import PostScreen from '../screens/Post';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import ConfigScreen from '../screens/Config';

const HomeMenu: React.FC  = () => (
  <Stack.Navigator
    initialRouteName="Main"
    screenOptions={{headerShown: false}}
  >
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Config" component={ConfigScreen} />
    <Stack.Screen name="Main" component={AppRoutes} />
  </Stack.Navigator>
)

const AppRoutes: React.FC  = () => (

    <NavigationContainer>
      <Tab.Navigator

        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            switch(route.name){
              case 'Home':
                return <Feather name='home' size={size} color={color} />
                break
              case 'Post':
                return <Feather name='plus-square' size={26} color={color} />
                break
              case 'Profile':
                return <Feather name='user' size={size} color={color} />
                break
              case 'Config':
                return <Octicons name='gear' size={size} color={color} />
                break
              default:
                return <Ionicons name='ios-information-circle' size={size} color={color} />
                break
            }
          },
        })}
        tabBarOptions={{
          style:{
            backgroundColor:'#FFF',
            borderTopColor: 'rgba(255,255,255,0.2)',
            height: 65,
          },
          activeTintColor:'#6C0FD9',
          inactiveTintColor:'#92929c'
        }}
      >
        <Tab.Screen  options={{ tabBarLabel: () => null}} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ tabBarLabel: () => null}} name="Post" component={PostScreen} />
        <Tab.Screen options={{ tabBarLabel: () => null}} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
);

export default AppRoutes;
