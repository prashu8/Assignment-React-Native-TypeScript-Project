import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import UserProfile from '../screens/UserProfile';


const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => {

  const onClickLogout = () => {

  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            title: "Profile",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => { onClickLogout(); }}
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