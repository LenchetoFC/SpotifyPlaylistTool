import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/homeStack';
import { TabNavigator } from './src/routes/tabNav';

export default function App() {
  // const express = require("express");
  // const tool = express();

  // tool.listen(8081, () => {
  //   console.log("App is listening on port 8080!\n");
  // });

  // tool.get("/", (req, res) => {
  //   res.send("Hello");
  // });

  return (
    <Navigator
      // screenOptions={{headerShown: false}}
    >
      <TabNavigator />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
