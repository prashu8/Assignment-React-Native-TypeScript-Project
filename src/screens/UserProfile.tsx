import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    StatusBar, SafeAreaView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';


import URLConstants from '../constants/URLConstants';
import { KEY_USER_TOKEN } from '../constants/AppDefine';



const UserProfile = props => {


    // get theme from redux
    const theme = useSelector(state => state.theme.theme);

    const [profileData, setProfileData] = useState({});

    // props.route.params

    useEffect(() => {
        getProfileData();
        storeDataOnAsync(props.route.params.id)

    }, [getProfileData, storeDataOnAsync]);



    const storeDataOnAsync = (id) => {
        try {
            AsyncStorage.setItem(KEY_USER_TOKEN, id)
        } catch (e) {
            console.log(e);
        }
    };


    const getProfileData = () => {
        try {
            fetch(URLConstants.USER_PROFILE_URL + props.route.params.id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log("RES for profile data", res.data);
                    setProfileData(res.data);

                })
        } catch (error) {
            console.error("ERROR", error);
        }


    }

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
                <View style={{ ...theme.defaultBackround, padding: 20 }}>

                    <View style={{
                        width: '100%', marginTop: 20
                    }}>
                        <View style={theme.profileTextView}>
                            <Text
                                style={theme.profileMainText}>Full Name : </Text>
                            <Text style={{ ...theme.profileSubText, margin: 10, width: "95%" }}>{profileData.fullname}</Text>
                        </View>
                        <View style={theme.profileTextView}>
                            <Text
                                style={theme.profileMainText}>Email : </Text>
                            <Text style={{ ...theme.profileSubText, margin: 10, width: "50%" }}>{profileData.email}</Text>
                        </View>
                        <View style={theme.profileTextView}>
                            <Text
                                style={theme.profileMainText}>Mobile No / Username : </Text>
                            <Text style={{ ...theme.profileSubText, margin: 10, width: "95%" }}>{profileData.mobileNo}</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    );
}

export const screenOptions = navData => {

    return {
        title: "Profile",
        headerRight: () => (
            <TouchableOpacity
                onPress={() => { navData.navigation.replace('Login') }}
                style={{ alignSelf: 'center', paddingRight: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>LOG OUT</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default UserProfile;