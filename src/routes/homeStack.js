// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SwipeScreen from '../screens/swipeNavigator';
import Home from '../screens/homeNavigator';
import Welcome from '../screens/welcomeNavigator';

const Stack = createNativeStackNavigator();

// const screens = {
//   swipeScreen: {
//     screen: swipeScreen,
//     navigationOptions: {
//       headerShown: false
//     }
//   }//,
//   // OtherScreen:{
//   //   screen: OtherScreen
//   // }

// }

// const HomeStack = createStackNavigator(
//   screens, 
//   { 
//     navigationOptions: {
//       headerShown: false
//     }
//   }
// )

function HomeStack(props) {
  return (
    <NavigationContainer options={{headerShown: false}}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="swipeNav" component={SwipeScreen} />
        <Stack.Screen name="homeNav" component={Home}/>
        <Stack.Screen name="welcomeNav" component={Welcome} />

      </Stack.Navigator>
      </NavigationContainer>
  );
}

// export default createAppContainer(HomeStack);
export default HomeStack;