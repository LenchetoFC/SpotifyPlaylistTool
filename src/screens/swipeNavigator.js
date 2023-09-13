import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TabNavigator } from '../routes/tabNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import swipeScreen from './swipeScreen';

const swiperStack = createNativeStackNavigator();

export default function SwipeScreen({navigation}) {
  return (
    <swiperStack.Navigator>
      <swiperStack.Screen
        name="swipeScreen" component={swipeScreen}
      />

    </swiperStack.Navigator>

  );
}

const styles = StyleSheet.create({
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
