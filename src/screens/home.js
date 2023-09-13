import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from '../routes/tabNav';

const homeStack = createNativeStackNavigator();

function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Home is where the motherfuckers live and where we'll snuff them out like a couple of vermin</Text>
        <Button title='sue me'/>
        <StatusBar style="auto" />
        {/* <TabNavigator/> */}
    </View>
  );
}

export default function HSomeNavigator({navigation}) {
  return (
    <homeStack.Navigator options={{headerShown: false}}>
      <homeStack.Screen
        name="home" component={Home}
      />

    </homeStack.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
    // alignItems: 'center',
    justifyContent: 'center',
    
  },
});
