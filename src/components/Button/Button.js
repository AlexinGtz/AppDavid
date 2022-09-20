import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

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

    return (
    <Pressable style={({ pressed }) => [
        { backgroundColor: pressed ? 'white' : '#1E6DB6' },
        styles.button,
    ]} onPress={onPress}>
        {RenderButtonText}
    </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'Raleway',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center',
    }
})

export default Button;