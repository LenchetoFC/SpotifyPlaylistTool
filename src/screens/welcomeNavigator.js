import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '../routes/tabNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from './welcome';

const swiperStack = createNativeStackNavigator();

export default function Welcome({navigation}) {
  return (
    <swiperStack.Navigator>
      <swiperStack.Screen
        name="welcome" component={welcome}
      />
    </swiperStack.Navigator>

  );
}