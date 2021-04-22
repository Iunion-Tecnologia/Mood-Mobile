import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons, Feather, Octicons} from '@expo/vector-icons';
=======
import Toast from 'react-native-toast-message';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import { useComment } from '../hooks/comment';
import CommentModal from '../components/Comment';
>>>>>>> release/v1.3.1

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Screens

import HomeScreen from '../screens/Home';
import PostScreen from '../screens/Post';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import UserScreen from '../screens/User';
import FollowsScreen from '../screens/Follows';
import EditScreen from '../screens/EditProfile';

const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="EditScreen" component={EditScreen} />
    <Stack.Screen name="FollowScreen" component={FollowsScreen} />
  </Stack.Navigator>
);

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="UserScreen" component={UserScreen} />
    <Stack.Screen name="FollowScreen" component={FollowsScreen} />
  </Stack.Navigator>
);

const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    <Stack.Screen name="UserScreen" component={UserScreen} />
    <Stack.Screen name="FollowScreen" component={FollowsScreen} />
  </Stack.Navigator>
<<<<<<< HEAD
)

const AppRoutes: React.FC  = () => (
    <>
    <StatusBar backgroundColor="#FFF" style="dark" />
    <NavigationContainer>
      <Tab.Navigator
=======
);
>>>>>>> release/v1.3.1

const AppRoutes: React.FC = () => {
  const { isOpen, postId, closeModal } = useComment();

<<<<<<< HEAD
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
              case 'Search':
                return <Feather name='search' size={size} color={color} />
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
        <Tab.Screen options={{ tabBarLabel: () => null}} name="Home" component={HomeNavigator} />
        <Tab.Screen options={{ tabBarLabel: () => null}} name="Post" component={PostScreen} />
        <Tab.Screen options={{ tabBarLabel: () => null}} name="Search" component={SearchNavigator} />
        <Tab.Screen options={{ tabBarLabel: () => null}} name="Profile" component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);
=======
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                case 'Home':
                  return <Feather name="home" size={size} color={color} />;
                  break;
                case 'Post':
                  return <Feather name="plus-square" size={26} color={color} />;
                  break;
                case 'Profile':
                  return <Feather name="user" size={size} color={color} />;
                  break;
                case 'Config':
                  return <Octicons name="gear" size={size} color={color} />;
                  break;
                case 'Search':
                  return <Feather name="search" size={size} color={color} />;
                  break;
                default:
                  return (
                    <Ionicons
                      name="ios-information-circle"
                      size={size}
                      color={color}
                    />
                  );
                  break;
              }
            },
          })}
          tabBarOptions={{
            style: {
              backgroundColor: '#FFF',
              borderTopColor: 'rgba(255,255,255,0.2)',
              height: 65,
            },
            activeTintColor: '#6C0FD9',
            inactiveTintColor: '#92929c',
          }}
        >
          <Tab.Screen
            options={{ tabBarLabel: () => null }}
            name="Home"
            component={HomeNavigator}
          />
          <Tab.Screen
            options={{ tabBarLabel: () => null }}
            name="Post"
            component={PostScreen}
          />
          <Tab.Screen
            options={{ tabBarLabel: () => null }}
            name="Search"
            component={SearchNavigator}
          />
          <Tab.Screen
            options={{ tabBarLabel: () => null }}
            name="Profile"
            component={ProfileNavigator}
          />
        </Tab.Navigator>
        <Toast ref={ref => Toast.setRef(ref)} />
        <CommentModal
          onRequestClose={() => closeModal()}
          postId={postId}
          visible={isOpen}
          animationType="slide"
        />
      </NavigationContainer>
    </>
  );
};
>>>>>>> release/v1.3.1

export default AppRoutes;
