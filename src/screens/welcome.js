import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '../routes/tabNav';


export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Welcome</Text>
        <StatusBar style="auto" />
        {/* <TabNavigator/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
