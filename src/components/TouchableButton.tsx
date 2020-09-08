import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BUTTON_TOUCHABLE_OPACITY } from '../constants/AppDefine';

const TouchableButton = props => {

    return (
        <TouchableOpacity
            onPress={props.onButtonClick}
            activeOpacity={BUTTON_TOUCHABLE_OPACITY}
            style={props.buttonStyle}>
            <Text style={props.buttonTextStyle}>
                {props.buttonText}
            </Text>
        </TouchableOpacity>
    );
};

export default TouchableButton;