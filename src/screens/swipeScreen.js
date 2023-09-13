import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TabNavigator } from '../routes/tabNav';


// import { get, post } from 'httpie';

export default function SwipeScreen({navigation}) {
  return (
    <View style={styles.screenContainer}>
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.text}>Swipe Screen is the sh-i-it</Text>
      {/* <Button onPress={() => navigation.navigate('../screens/welcome')} title='goback' /> */}
      <TabNavigator/>
    </View>
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name="swipeScreen"
    //     component={home}
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons
    //           style={styles.backButtonIcon}
    //           size={32}
    //           name="home"
    //         />
    //       )
    //     }}
    //   />
    //   <Tab.Screen
    //     name="welcome"
    //     component={welcome}
    //     options={{
    //       title: 'Welcome',
    //       tabBarIcon: ({ color, size }) => (
    //         <AntDesign
    //           style={styles.backButtonIcon}
    //           size={32}
    //           name="user"
    //         />
    //       )
    //     }}
    //   />
    // </Tab.Navigator>
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
