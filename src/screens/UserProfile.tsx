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


const UserProfile = props => {

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

                    {/* This is the main view */}
                    <View style={{ ...theme.defaultBackround,  padding: 20 }}>

                        <View style={{
                            width: '100%', marginTop: 20
                        }}>
                            <View style={theme.profileTextView}>
                                <Text
                                    style={theme.profileMainText}>Full Name : </Text>
                                <Text style={{ ...theme.profileSubText, margin: 10, width: "95%" }}>It's Features</Text>
                            </View>
                            <View style={theme.profileTextView}>
                                <Text
                                    style={theme.profileMainText}>Email : </Text>
                                <Text style={{ ...theme.prodprofileSubTextuctDetailSubText, margin: 10, width: "95%" }}>It's Specification</Text>
                            </View>
                            <View style={theme.profileTextView}>
                                <Text
                                    style={theme.profileMainText}>Mobile No : </Text>
                                <Text style={{ ...theme.profileSubText, margin: 10, width: "95%" }}>It's Applications</Text>
                            </View>
                        </View>

                    </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

export default UserProfile;