import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../screens/home';
import welcome from '../screens/welcome';
import swipeScreen from '../screens/swipeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: styles.tabNavContainer,
        tabBarInActiveTintColor: '#000000',
        tabBarActiveTintColor: '#e5e5e5',
        headerShown: false,
      }}
    >
        <Tab.Screen name='HomeTab' component={home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                // style={styles.backButtonIcon}
                size={32}
                name="home"
                color={color}
              />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen name="swipeScreenTab" component={swipeScreen}
          options={{
            title: 'Swiper',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                // style={styles.backButtonIcon}
                style={{marginTop: -3}}
                size={32}
                name="musical-notes"
                color={color}
              />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen name='WelcomeTab' component={welcome}
          options={{
            title: 'Welcome',
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                // style={styles.backButtonIcon}
                size={32}
                name="infocirlce"
                color={color}

              />
            ),
          }}
        />
    </Tab.Navigator>
   )
}

const styles = StyleSheet.create({
  tabNavContainer: {
    // flex: 1,
    // display: 'flex',
    // backgroundColor: '#D85227',
    // // alignItems: 'center',
    // // justifyContent: 'center',
    // width: '100%',
    position: 'absolute', 
    width: "100%",
    // marginRight: '1000', 
    height: "10%", 
    backgroundColor: "#666666",
    marginBottom: -10,
    // left: 0,
  },
});