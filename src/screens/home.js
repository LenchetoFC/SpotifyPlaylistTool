import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '../routes/tabNav';

// import { get } from 'httpie';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Home is where the motherfuckers live and where we'll snuff them out like a couple of vermin</Text>
        <Button title='sue me'/>
        <StatusBar style="auto" />
        {/* <TabNavigator/> */}
    </View>
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
