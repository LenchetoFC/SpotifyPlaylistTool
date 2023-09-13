import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './home';

const homeStack = createNativeStackNavigator();

export default function SwipeScreen({navigation}) {
  return (
    <swiperStack.Navigator>
      <swiperStack.Screen
        name="home" component={home}
      />

    </swiperStack.Navigator>

  );
}