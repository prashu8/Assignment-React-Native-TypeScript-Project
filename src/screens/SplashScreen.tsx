import React, { useEffect } from 'react';

import {
  View, Image, StatusBar, Platform,
  SafeAreaView
} from 'react-native';
import { useSelector } from 'react-redux';


const SplashScreen = props => {

  // get Venue theme from redux
  const theme = useSelector(state => state.theme.theme);


  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login')
    }, 1000)
  }, []);



  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? "light-content" : "dark-content"}
        backgroundColor={Platform.OS === 'android' ? "#000" : "fff"} />
      <SafeAreaView style={theme.safeAreaView}>
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



export default SplashScreen;