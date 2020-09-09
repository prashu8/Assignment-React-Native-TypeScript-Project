import React, { useState } from 'react';
import {
    View, Text, StyleSheet,
    StatusBar, SafeAreaView,
    ScrollView,
    TextInput,
    Platform
} from 'react-native';
import { useSelector } from 'react-redux';

import TouchableButton from '../components/TouchableButton';
import URLConstants from '../constants/URLConstants';



const LoginScreen = props => {



    // get theme from redux
    const theme = useSelector(state => state.theme.theme);



    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');


    const passwordValueHandler = text => {
        setPassword(text);
    };

    const mobileNoValueHandler = text => {
        setMobileNo(text);
    };

   

    const onClickLoginButton = () => {

        if (mobileNo.trim() != "" && password.trim() != "") {

            try {
                fetch(URLConstants.LOGIN_URL, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: mobileNo,
                        password: password
                    })
                })
                    .then((response) => response.json())
                    .then((res) => {
                        console.log("RES for login data", res);
                        if (res.message == "login successfull") {
                            props.navigation.replace('UserProfile', { id: res._id })
                        }
                    })
            } catch (error) {
                console.error("ERROR", error);
            }

        } else {
            alert("Please fill all the fields correctly.")
        }

    }

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
                        <Text style={theme.headerText}>Login</Text>

                        {/* This is UserName TextInput */}
                        <TextInput
                            style={theme.defaultTextInput}
                            onChangeText={mobileNoValueHandler}
                            keyboardType="phone-pad"
                            placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
                            placeholder={'Mobile No'}
                            value={mobileNo} />



                        {/* This is Password TextInput */}
                        <TextInput
                            style={theme.defaultTextInput}
                            secureTextEntry={true}
                            onChangeText={passwordValueHandler}
                            placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
                            placeholder={'Password'}
                            value={password} />


                        <TouchableButton
                            onButtonClick={() => {
                                onClickLoginButton();
                            }}
                            buttonStyle={{ ...theme.defaultButton, width: "40%" }}
                            buttonTextStyle={theme.defaultButtonText}
                            buttonText="LOGIN" />


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

export default LoginScreen;