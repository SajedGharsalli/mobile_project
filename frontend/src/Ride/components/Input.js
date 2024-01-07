import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const Input = ({value,text,placeholder,setValue}) => {
  return (
    <View >
        <Text style={styles.label}>{text}</Text>
        <TextInput
              style={styles.input}
              placeholder={placeholder}
              value={value}
              onChangeText={(text) => setValue(text)}
            />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
      label: {
        fontSize: 16,
        margin : 5
      },
      input: {
        height: 35,
        paddingLeft: 8,
        marginBottom : 5,
        borderWidth : 0.2
      },
})