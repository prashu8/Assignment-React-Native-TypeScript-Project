import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    StatusBar, SafeAreaView,
    TouchableOpacity, ScrollView,
    TextInput,
    Platform
} from 'react-native';
import { useSelector } from 'react-redux';



import TouchableButton from '../components/TouchableButton';


const LoginScreen = props => {

    // get Venue theme from redux
    const theme = useSelector(state => state.theme.theme);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {

    }, []);

    const passwordValueHandler = text => {
        setPassword(text);
    };

    const userNameValueHandler = text => {
        setUserName(text);
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
                        <Text style={theme.headerText}>Login</Text>

                        {/* This is UserName TextInput */}
                        <TextInput
                            style={theme.defaultTextInput}
                            onChangeText={userNameValueHandler}
                            // editable={editEmail}
                            placeholderTextColor={theme.defaultTextInputPlaceholderTextColor.color}
                            placeholder={'Username'}
                            value={userName} />



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
                                props.navigation.replace('UserProfile');
                            }}
                            buttonStyle={{ ...theme.defaultButton, width: "40%" }}
                            buttonTextStyle={theme.defaultButtonText}
                            buttonText="LOGIN" />

                        <Text
                        onPress={() => {props.navigation.navigate('SignUp');}}
                            style={{ color: '#000', fontSize: 15, marginVertical: 10, textDecorationLine: 'underline' }}>
                            Have an account?</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

export default LoginScreen;