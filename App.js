import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import swipeScreen from './src/screens/swipeScreen';
import welcome from './src/screens/welcome';
import home from './src/screens/home';
import profile from './src/screens/profile';
import settings from './src/screens/settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator(){
  return (
  <Tab.Navigator
    initialRouteName='swipeScreen'
    screenOptions={{
      activeTintColor: '#e91e63',
      inactiveTintColor: 'gray',
      tabBarStyle: styles.tabBarContainer,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="profileScreen"
      component={profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
        tabBarHideOnKeyboard: true,
      }}
    />
    <Tab.Screen
      name="Track Swiper"
      component={swipeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="musical-notes" color={color} size={size} />
        ),
        tabBarHideOnKeyboard: true,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={settings}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default function App() {
  useEffect( () => {
    // console.log("App.js: useEffect")
  }, []);
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="swipeScreen">
          <Stack.Screen name="swipeScreen" component={TabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="homeScreen" component={home} options={{headerShown: false}}/>
          <Stack.Screen name="profileScreen" component={profile} options={{headerShown: false}}/>
          <Stack.Screen name="settingsScreen" component={settings} options={{headerShown: false}}/>
          {/* <Stack.Screen name="settingsPreference" component={settingsPreference} options={{headerShown: false}}/>
          <Stack.Screen name="settingInfo" component={settingInfo} options={{headerShown: false}}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  tabBarContainer:{
    backgroundColor: '#666666',
  },
  screenContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fff',
    // alignItems: 'center', 
    justifyContent: 'center',
    
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tab: {
    // flex: 1,
    // display: 'flex',
    // backgroundColor: '#D85227',
    alignItems: 'flex-end',
    // justifyContent: 'center',
    // height: 100,
    // width: 100,
    // borderRadius: 50,
  }
});