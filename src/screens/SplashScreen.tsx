import React, { useState, useEffect } from 'react';

import {
    View, Text, StyleSheet, Image, StatusBar, Platform,
    SafeAreaView
} from 'react-native';
import { useSelector } from 'react-redux';


const SplashScreen = props => {

    // get Venue theme from redux
    const theme = useSelector(state => state.theme.theme);


    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('Login')
        }, 2000)
    }, [])

    return (
        <>
            <StatusBar
                barStyle={Platform.OS === 'android' ? "light-content" : "dark-content"}
                backgroundColor={Platform.OS === 'android' ? "#000" : "fff"} />

            <SafeAreaView
                style={theme.safeAreaView}>
                <View style={{ ...theme.defaultBackround, alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/react-native.png')}
                        resizeMode="contain"
                        style={{ height: '50%', width: '100%' }} />
                </View>
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({});

export default SplashScreen;