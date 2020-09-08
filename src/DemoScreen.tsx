import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

const DemoScreen = props => {

    // get Venue theme from redux
    const theme = useSelector(state => state.theme.theme);

    return (
        <View style={theme.defaultBackround}>
            <Text>here is the text file</Text>
        </View>
    )
};

export default DemoScreen;