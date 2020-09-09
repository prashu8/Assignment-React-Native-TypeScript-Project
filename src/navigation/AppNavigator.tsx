import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import UserProfile, { screenOptions as ProfileScreenOptions } from '../screens/UserProfile';
import SplashScreen from '../screens/SplashScreen';


const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={ProfileScreenOptions} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;