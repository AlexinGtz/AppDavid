import { StyleSheet, Text, Dimensions } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { buildDavid } from '../../constants' 

const deviceWidth = Dimensions.get('window').width;

const Button = (props) => {
    const {
        title,
        onPress
    } = props;

    const RenderButtonText = ({ pressed }) => {
        return (
            <Text style={[{
                color: pressed ? 'black' : 'white'
            }, styles.buttonText]}>{title}</Text>
        )
    }

    const color = buildDavid ? '#1E6DB6' : '#234f77';

    return (
    <Pressable style={({ pressed }) => [
        { backgroundColor: pressed ? 'white' : color },
        styles.button,
    ]} onPress={onPress}>
        {RenderButtonText}
    </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'RobotoBold',
        fontSize: deviceWidth < 500 ? 20 : 40,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: deviceWidth < 500 ? 20 : 30,
        elevation: 5,
        alignSelf: 'center',
        marginTop: 5,
    }
})

export default Button;