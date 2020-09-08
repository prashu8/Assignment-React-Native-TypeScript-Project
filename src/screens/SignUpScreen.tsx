import React, { useState, useEffect } from 'react';

import {
  View, Text, ScrollView,
  SafeAreaView, TextInput, Platform,
  StatusBar
} from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationActions, StackActions } from '@react-navigation/native';



import TouchableButton from '../components/TouchableButton';


const SignUpScreen = props => {

  // get Venue theme from redux
  const theme = useSelector(state => state.theme.theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');


  useEffect(() => {

  }, []);

  const passwordValueHandler = text => {
    setPassword(text);
  };

  const emailValueHandler = text => {
    setEmail(text);
  };

  const mobileNoHandler = text => {
    setMobileNo(text);
  };

  const confirmPasswordHandler = text => {
    setConfirmPassword(text);
  };

  const fullNameHandler = text => {
    setFullName(text);
  };


    // this function remove all the screens after navigation
    const finishAfterNavigation = (screen, props) => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: screen })
        ]
      });
      props.navigation.dispatch(resetAction);
    };

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? "light-content" : "dark-content"}
        backgroundColor={Platform.OS === 'android' ? "#000" : "fff"} />

      <SafeAreaView
        style={theme.safeAreaView}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          // this prop/condition will allow button to be submitted when keyboard is open
          keyboardShouldPersistTaps="handled">

          {/* This is the main view */}
          <View style={{ ...theme.defaultBackround, padding: 20 }}>

            {/* This is heading Text */}
            <Text style={theme.headerText}>Register here!</Text>

            {/* This is UserName TextInput View */}
            <TextInput
              style={theme.defaultTextInput}
              onChangeText={fullNameHandler}
              placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
              placeholder={'Full Name'}
              value={fullName} />

            {/* This is UserName Full Name View */}
            <TextInput
              style={theme.defaultTextInput}
              onChangeText={emailValueHandler}
              placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
              placeholder={'Email'}
              value={email} />

            {/* This is UserName Mobile No View */}
            <TextInput
              style={theme.defaultTextInput}
              keyboardType="phone-pad"
              onChangeText={mobileNoHandler}
              placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
              placeholder={'Mobile Number'}
              value={mobileNo} />

            {/* This is Password TextInput View */}
            <TextInput
              style={theme.defaultTextInput}
              secureTextEntry={true}
              onChangeText={passwordValueHandler}
              placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
              placeholder={'Password'}
              value={password} />

            {/* This is Password TextInput View */}
            <TextInput
              style={theme.defaultTextInput}
              secureTextEntry={true}
              onChangeText={confirmPasswordHandler}
              placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
              placeholder={'Confirm Password'}
              value={confirmPassword} />

            <TouchableButton
              onButtonClick={() => {
                props.navigation.navigate('SignUp');
              }}
              buttonStyle={{ ...theme.defaultButton, width: "40%" }}
              buttonTextStyle={theme.defaultButtonText}
              buttonText="SIGN UP" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;