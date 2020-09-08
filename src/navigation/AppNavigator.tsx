import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import UserProfile from '../screens/UserProfile';


const Stack = createStackNavigator();

const AppNavigator = props => {


  // this function remove all the screens after navigation
  const finishAfterNavigation = (screen, props) => {
    props.navigation.dispatch(
      StackActions.replace(screen)
    );
  };



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
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            title: "Profile",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => { finishAfterNavigation('Login', props) }}
                style={{ alignSelf: 'center', paddingRight: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>LOG OUT</Text>
              </TouchableOpacity>
            )
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;