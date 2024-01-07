import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ text, onpress, color, height= 55 , tcolor='white'}) => {
    return (
        <View>
            <TouchableOpacity
                style={[styles.button,{backgroundColor : color, height : height }]}
                onPress={onpress}>
                <Text style={[styles.text,{color : tcolor}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal : 20,
        borderWidth: 1,
        borderColor: 'white'
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5
    }
})