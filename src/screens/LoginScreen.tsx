import React, { useState } from 'react';
import {
    View, Text, StyleSheet,
    StatusBar, SafeAreaView,
    ScrollView,
    TextInput,
    Platform
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import TouchableButton from '../components/TouchableButton';
import { loginUser } from '../store/actions/apis';


const LoginScreen = props => {

    const dispatch = useDispatch();

    // get theme from redux
    const theme = useSelector(state => state.theme.theme);


    // get userLogin res from redux thunk
    const userLogin = useSelector(state => state.apis.userLogin);

    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');


    const passwordValueHandler = text => {
        setPassword(text);
    };

    const mobileNoValueHandler = text => {
        setMobileNo(text);
    };

    const storeDataOnAsync = async (id) => {
        try {
            await AsyncStorage.setItem('userToken', id)
        } catch (e) {
            console.log(e);
        }
    };

    const onClickLoginButton = (userName, password) => {

        if (mobileNo.trim() != "" && password.trim() != "") {

            try {
                dispatch(loginUser(userName, password));
            } catch (error) {
                console.log(" error", error);

            }

            if (userLogin.message == "login successfull") {
                props.navigation.replace('UserProfile', { id: userLogin._id });
                // storeDataOnAsync(userLogin._id);
            }

            console.log("++++", userLogin);


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
                                onClickLoginButton(mobileNo, password)
                            }}
                            buttonStyle={{ ...theme.defaultButton, width: "40%" }}
                            buttonTextStyle={theme.defaultButtonText}
                            buttonText="LOGIN" />

                        <Text
                            onPress={() => { props.navigation.navigate('SignUp'); }}
                            style={{ color: '#000', fontSize: 15, marginVertical: 10, textDecorationLine: 'underline' }}>
                            don't have an account?</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

export default LoginScreen;